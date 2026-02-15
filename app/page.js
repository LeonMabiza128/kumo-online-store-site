'use client'
import { useState } from 'react'
export default function Home() {
const [cartCount, setCartCount] = useState(0)
const [email, setEmail] = useState('')
const featuredProducts = [
{ id: 1, name: 'iPhone 15 Pro Max', price: 1199, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', category: 'Smartphones' },
{ id: 2, name: 'MacBook Air M3', price: 1299, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400', category: 'Laptops' },
{ id: 3, name: 'AirPods Pro 2', price: 249, image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400', category: 'Audio' },
{ id: 4, name: 'iPad Pro 12.9"', price: 899, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400', category: 'Tablets' },
{ id: 5, name: 'Apple Watch Ultra 2', price: 799, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400', category: 'Wearables' },
{ id: 6, name: 'Samsung 65" QLED TV', price: 1499, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400', category: 'TVs' }
]
const categories = [
{ name: 'Smartphones', icon: '📱', count: 24 },
{ name: 'Laptops', icon: '💻', count: 18 },
{ name: 'Audio', icon: '🎧', count: 32 },
{ name: 'Gaming', icon: '🎮', count: 15 },
{ name: 'Tablets', icon: '📋', count: 12 },
{ name: 'Wearables', icon: '⌚', count: 20 }
]
const addToCart = (product) => {
setCartCount(prev => prev + 1)
}
const handleNewsletterSubmit = (e) => {
e.preventDefault()
if (email) {
alert('Thank you for subscribing!')
setEmail('')
}
}
return (
<div>
<nav style={{background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)', position: 'fixed', top: 0, width: '100%', zIndex: 1000, borderBottom: '1px solid #333'}}>
<div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px'}}>
<div style={{fontSize: '24px', fontWeight: 'bold'}} className="gradient-text">TechStore</div>
<div style={{display: 'flex', gap: '30px', alignItems: 'center'}}>
<a href="#products" style={{transition: 'color 0.3s', color: '#ccc'}}>Products</a>
<a href="#categories" style={{transition: 'color 0.3s', color: '#ccc'}}>Categories</a>
<a href="#newsletter" style={{transition: 'color 0.3s', color: '#ccc'}}>Newsletter</a>
<div style={{position: 'relative', cursor: 'pointer'}}>
<span style={{fontSize: '24px'}}>🛒</span>
{cartCount > 0 && <span style={{position: 'absolute', top: '-8px', right: '-8px', background: '#667eea', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold'}}>{cartCount}</span>}
</div>
</div>
</div>
</nav>
<section style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', textAlign: 'center', marginTop: '70px'}}>
<div className="container">
<h1 style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>Premium Electronics</h1>
<p style={{fontSize: '1.5rem', marginBottom: '40px', opacity: 0.9}}>Discover cutting-edge technology at unbeatable prices</p>
<button className="btn-primary" style={{fontSize: '1.2rem', padding: '15px 30px'}} onClick={() => document.getElementById('products').scrollIntoView({behavior: 'smooth'})}>Shop Now</button>
</div>
</section>
<section id="categories" style={{padding: '80px 0', background: '#111'}}>
<div className="container">
<h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px'}} className="gradient-text">Browse Categories</h2>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
{categories.map((category, index) => (
<div key={index} className="card" style={{textAlign: 'center', cursor: 'pointer'}}>
<div style={{fontSize: '3rem', marginBottom: '20px'}}>{category.icon}</div>
<h3 style={{fontSize: '1.5rem', marginBottom: '10px', color: '#667eea'}}>{category.name}</h3>
<p style={{color: '#888'}}>{category.count} products</p>
</div>
))}
</div>
</div>
</section>
<section id="products" style={{padding: '80px 0', background: '#0a0a0a'}}>
<div className="container">
<h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px'}} className="gradient-text">Featured Products</h2>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
{featuredProducts.map(product => (
<div key={product.id} className="card">
<img src={product.image} alt={product.name} style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px'}} />
<div style={{padding: '10px'}}>
<span style={{background: '#667eea', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '10px', display: 'inline-block'}}>{product.category}</span>
<h3 style={{fontSize: '1.3rem', marginBottom: '10px'}}>{product.name}</h3>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
<span style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea'}}>${product.price}</span>
<button className="btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
</div>
</div>
</div>
))}
</div>
</div>
</section>
<section id="newsletter" style={{padding: '80px 0', background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)'}}>
<div className="container" style={{textAlign: 'center'}}>
<h2 style={{fontSize: '2.5rem', marginBottom: '20px'}} className="gradient-text">Stay Updated</h2>
<p style={{fontSize: '1.2rem', marginBottom: '40px', color: '#ccc'}}>Get the latest deals and product launches delivered to your inbox</p>
<form onSubmit={handleNewsletterSubmit} style={{maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '15px'}}>
<input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{flex: 1, padding: '15px', borderRadius: '8px', background: '#333', color: 'white'}} required />
<button type="submit" className="btn-primary">Subscribe</button>
</form>
</div>
</section>
<footer style={{background: '#0a0a0a', padding: '40px 0', borderTop: '1px solid #333'}}>
<div className="container" style={{textAlign: 'center'}}>
<div style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px'}} className="gradient-text">TechStore</div>
<p style={{color: '#888'}}>© 2024 TechStore. All rights reserved.</p>
<div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px'}}>
<a href="#" style={{color: '#667eea'}}>Privacy Policy</a>
<a href="#" style={{color: '#667eea'}}>Terms of Service</a>
<a href="#" style={{color: '#667eea'}}>Contact Us</a>
</div>
</div>
</footer>
</div>
)
}