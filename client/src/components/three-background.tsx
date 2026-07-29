import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Materials ─────────────────────────────── */
    const matWireYellow = new THREE.MeshBasicMaterial({
      color: 0xfbbf24, wireframe: true, transparent: true, opacity: 0.25,
    });
    const matWireCyan = new THREE.MeshBasicMaterial({
      color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.2,
    });
    const matSolidYellow = new THREE.MeshBasicMaterial({
      color: 0xfbbf24, transparent: true, opacity: 0.06,
    });

    /* ── Main rotating icosahedron ─────────────── */
    const icoGeo = new THREE.IcosahedronGeometry(10, 1);
    const icoWire = new THREE.Mesh(icoGeo, matWireYellow);
    scene.add(icoWire);

    /* ── Inner octahedron ──────────────────────── */
    const octGeo = new THREE.OctahedronGeometry(5, 0);
    const octMesh = new THREE.Mesh(octGeo, matWireCyan);
    scene.add(octMesh);

    /* ── Floating shapes ───────────────────────── */
    const floatingShapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.TetrahedronGeometry(1.2),
      new THREE.IcosahedronGeometry(0.9, 0),
      new THREE.OctahedronGeometry(1.0, 0),
      new THREE.BoxGeometry(1.4, 1.4, 1.4),
    ];

    for (let i = 0; i < 18; i++) {
      const geo = geometries[i % geometries.length];
      const mat = i % 2 === 0 ? matWireYellow.clone() : matWireCyan.clone();
      (mat as THREE.MeshBasicMaterial).opacity = 0.3 + Math.random() * 0.3;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      floatingShapes.push(mesh);
    }

    /* ── Particle field ────────────────────────── */
    const particleCount = 400;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const ptMat = new THREE.PointsMaterial({
      color: 0xfbbf24, size: 0.15, transparent: true, opacity: 0.5,
    });
    scene.add(new THREE.Points(ptGeo, ptMat));

    /* ── Mouse parallax ────────────────────────── */
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ── Resize ────────────────────────────────── */
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    /* ── Animate ───────────────────────────────── */
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      icoWire.rotation.x = t * 0.08;
      icoWire.rotation.y = t * 0.12;

      octMesh.rotation.x = -t * 0.15;
      octMesh.rotation.y = t * 0.1;

      floatingShapes.forEach((m, i) => {
        m.rotation.x += 0.005 + i * 0.001;
        m.rotation.y += 0.007 + i * 0.001;
        m.position.y += Math.sin(t * 0.5 + i) * 0.01;
      });

      camera.position.x += (mouseX * 3 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
