import { MenuGrid } from '@/components/menu/MenuGrid';

export default function MenuPage() {
  return (
    <div>
      <header style={{ padding: '145px 24px 40px', textAlign: 'center', backgroundColor: 'var(--surface-2)' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Our Menu</h1>
        <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Explore our culinary offerings, where traditional recipes meet contemporary flair.
        </p>
      </header>
      <MenuGrid />
    </div>
  );
}
