const EBAY_URL = 'https://www.ebay.com/str/casadelgatoantiques';
const listingMockData = [
 {title:'1930s Silverplate Service Tray with Scroll Edge',category:'Silverplate & Flatware',style:'Art Deco',material:'Silverplate',condition:'Good vintage wear',featured:true,price:'View on eBay'},
 {title:'Cherry Blossom Depression Glass Bowl',category:'Depression Glass',style:'1930s American',material:'Glass',condition:'Excellent',featured:true,price:'View on eBay'},
 {title:'McCoy Pottery Matte Glaze Vase',category:'McCoy Pottery',style:'Mid-Century Modern',material:'Ceramic',condition:'Minor glaze crazing',featured:false,price:'View on eBay'},
 {title:'Hollywood Regency Brass Table Lamp Pair',category:'Hollywood Regency',style:'Hollywood Regency',material:'Brass',condition:'Patina present',featured:true,price:'View on eBay'},
 {title:'LuRay Pastel Serving Platter',category:'LuRay Pottery',style:'Mid-Century',material:'Pottery',condition:'Very good',featured:false,price:'View on eBay'},
 {title:'Walnut Side Table with Tapered Legs',category:'Furniture',style:'Mid-Century Modern',material:'Walnut',condition:'Light surface wear',featured:false,price:'View on eBay'}
];
function ph(label){return `<div class="ph" role="img" aria-label="${label} placeholder image">${label}</div>`}
function header(active='') {return `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><h1>Casa Del Gato Antiques</h1><p>The Catman Collection</p></a><button class="menu-btn" aria-label="Toggle navigation" aria-expanded="false">Menu</button><nav class="nav-links"><a class="${active==='home'?'active':''}" href="index.html">Home</a><a class="${active==='shop'?'active':''}" href="shop.html">Shop</a><a class="${active==='learn'?'active':''}" href="learn.html">Learn</a><a class="${active==='id'?'active':''}" href="guides.html">Identification Guides</a><a class="${active==='contact'?'active':''}" href="contact.html">Contact</a><a class="ebay-btn" target="_blank" rel="noopener" href="${EBAY_URL}">eBay Store</a></nav></div></header>`}
function footer(){return `<footer class="footer"><div class="container footer-wrap"><nav class="footer-links" aria-label="Footer"><a href="shop.html">Listings</a><a href="learn.html">Learning Hub</a><a href="contact.html">Ask Matt</a><a target="_blank" rel="noopener" href="${EBAY_URL}">Visit eBay</a></nav><p class="footer-copy">© Casa Del Gato Antiques</p></div></footer>`}
function bootstrap(active){
 document.body.insertAdjacentHTML('afterbegin',header(active));
 document.body.insertAdjacentHTML('beforeend',footer());
 const menuBtn=document.querySelector('.menu-btn');
 const navLinks=document.querySelector('.nav-links');
 if(!menuBtn||!navLinks)return;
 menuBtn.addEventListener('click',()=>{
  const isOpen=navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(isOpen));
 });
 navLinks.querySelectorAll('a').forEach((link)=>link.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
 }));
 document.addEventListener('click',(event)=>{
  if(!navLinks.classList.contains('open'))return;
  if(event.target===menuBtn||menuBtn.contains(event.target)||navLinks.contains(event.target))return;
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
 });
}
