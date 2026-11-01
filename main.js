    // ==========================================
    // 🔥 MENU DATA (EDIT PRICES HERE 🔥)
    // ==========================================
    const menuData = [
      { tab: "Kebab & Grills", subCategories: [
        { name: "Mutton", items: [{ name: "Mutton Gola Kebab", price: "---" }, { name: "Mutton Boti Kebab", price: "---" }, { name: "Lamb Chop", price: "---" }]},
        { name: "Beef", items: [{ name: "Beef Afghani Tikka", price: "---" }, { name: "Rihla Beef Sheekh Kebab", price: "---" }, { name: "Beef Shish Kabab", price: "---" }, { name: "Beef Adina Kaba", price: "---" }, { name: "Beef Bihari Kebab", price: "---" }, { name: "Beef Khiri Kebab", price: "---" }]},
        { name: "Chicken", items: [{ name: "Tandoori Chicken", price: "---" }, { name: "Chicken Bihari Kebab", price: "---" }, { name: "Lahori Chicken Tikka", price: "---" }, { name: "Chicken Reshmi Kebab", price: "---" }, { name: "Chicken Malai Tikka", price: "---" }, { name: "Chicken Lahori Boti", price: "---" }, { name: "Chicken Tangdi Kebab", price: "---" }, { name: "Rihla Chicken Shashlik", price: "---" }, { name: "Chicken Adina Kabab", price: "---" }, { name: "Chicken Shish Kabab", price: "---" }, { name: "Tandoori Wing", price: "---" }]},
        { name: "Fish", items: [{ name: "BBQ Kural", price: "---" }, { name: "BBQ Talapiya", price: "---" }, { name: "Lahori Grilled Pomfret", price: "---" }, { name: "Grilled King Prawn", price: "---" }, { name: "Lahori Special Lobster", price: "---" }]}
      ]},
      { tab: "Arabic & Bengali", subCategories: [
        { name: "Arabic Signature", items: [{ name: "Laham Mandi", prices: ["1,000", "2,000", "3,900"], priceLabel: "Single / Half / Full" }, { name: "Chicken Kabsa", prices: ["600", "1,100", "2,000"], priceLabel: "Single / Half / Full" }, { name: "Chicken Faham", prices: ["---", "1,200", "2,350"], priceLabel: "Single / Half / Full" }, { name: "Ruz Laham (Arabic Biryani)", prices: ["280", "---", "---"], priceLabel: "Single / Half / Full" }]},
        { name: "Add Ons", items: [{ name: "Mandi/Kabsa Rice", price: "250" }, { name: "Kabsa Chicken", price: "350" }, { name: "Mandi Mutton", price: "750" }, { name: "Raita", price: "100" }, { name: "Mandi Sauce", price: "100" }]},
        { name: "Bengali À La Carte", items: [{ name: "Beef Lal Bhuna", price: "280" }, { name: "Beef Kala Bhuna", price: "280" }, { name: "Chicken Curry", price: "180" }, { name: "Chicken Roast", price: "250" }, { name: "Plain Polaw", price: "150" }, { name: "Plain Khichuri", price: "150" }, { name: "Plain Letka Khichuri", price: "150" }, { name: "Hilsa Fry", price: "650" }]},
        { name: "Bhuna Khichuri", items: [{ name: "Beef Bhuna Khichuri (Lal Bhuna)", price: "370" }, { name: "Beef Bhuna Khichuri (Kala Bhuna)", price: "370" }, { name: "Mutton Khichuri", price: "430" }, { name: "Chicken Bhuna Khichuri", price: "320" }, { name: "Letka Khichuri with Kala Bhuna", price: "370" }, { name: "Letka Khichuri with Lal Bhuna", price: "370" }, { name: "Beef Hilsa Khichuri", price: "750" }, { name: "Chicken Hilsa Khichuri", price: "720" }, { name: "Morog Polaw", price: "350" }]}
      ]},
      { tab: "Thai Chinese", subCategories: [
        { name: "Starters", items: [{ name: "Crispy Fried Chicken (1 Pc)", price: "130" }, { name: "Naga Wings (6 Pcs)", price: "360" }, { name: "Buffalo Wings (6 Pcs)", price: "340" }, { name: "BBQ Wings (6 Pcs)", price: "380" }, { name: "French Fries", price: "220" }, { name: "Hakka Chicken Lollipop (6 Pcs)", price: "380" }, { name: "Prawn Fry (6 Pcs)", price: "460" }, { name: "Cheese Nachos", price: "280" }, { name: "Chicken Wanton (6 Pcs)", price: "240" }]},
        { name: "Soups", items: [{ name: "Harira Soup", price: "300" }, { name: "Corn Soup", price: "180" }, { name: "Thai Thick Soup", price: "200" }, { name: "Thai Clear Soup", price: "200" }, { name: "Cream of Mushroom Soup", price: "350" }]},
        { name: "Salads", items: [{ name: "Arabic Fattoush Salad", price: "250" }, { name: "Cashew Nut Salad", price: "380" }, { name: "Grilled Chicken Salad", price: "420" }]},
        { name: "Beef", items: [{ name: "Beef Sizzling", prices: ["420", "630"], priceLabel: "2 Persons / 3 Persons" }, { name: "Beef Chili Onion", prices: ["399", "590"], priceLabel: "2 Persons / 3 Persons" }]},
        { name: "Prawn", items: [{ name: "Prawn Cracker", price: "530" }, { name: "Golden Prawn", price: "490" }]},
        { name: "Main Course", items: [{ name: "Special Fried Rice", prices: ["399", "590"], priceLabel: "2 Persons / 3 Persons" }, { name: "Mixed Chow Mein", prices: ["450", "650"], priceLabel: "2 Persons / 3 Persons" }, { name: "Thai Mixed Vegetables", prices: ["---", "430"], priceLabel: "2 Persons / 3 Persons" }]},
        { name: "Chicken", items: [{ name: "Chicken Chili Onion", prices: ["360", "540"], priceLabel: "2 Persons / 3 Persons" }, { name: "Thai Fried Chicken (6 Pcs)", prices: ["---", "570"], priceLabel: "2 Persons / 3 Persons" }, { name: "BBQ Chicken (6 Pcs)", prices: ["---", "590"], priceLabel: "2 Persons / 3 Persons" }]}
      ]},
      { tab: "Pizza & Burgers", subCategories: [
        { name: "Pizza", items: [{ name: "Arabic Special Pizza", prices: ["650", "850"], priceLabel: "Medium / Large" }, { name: "Special BBQ Chicken Pizza", prices: ["550", "750"], priceLabel: "Medium / Large" }, { name: "Chicken Sausage Delight", prices: ["520", "700"], priceLabel: "Medium / Large" }, { name: "Meat Masala Pizza", prices: ["550", "750"], priceLabel: "Medium / Large" }, { name: "Onion Sausage Tender", prices: ["550", "750"], priceLabel: "Medium / Large" }]},
        { name: "Burgers", items: [{ name: "Arabic Chicken Cheese Burger", price: "290" }, { name: "Chicken Cheese Burger", price: "240" }, { name: "Crispy Chicken Burger", price: "220" }, { name: "Chicken Sausage Blast", price: "290" }, { name: "Arabic Beef Cheese Burger", price: "350" }, { name: "Spicy Harissa Beef Burger", price: "370" }, { name: "Beef Cheese Burger", price: "290" }, { name: "Beef Sausage Blast", price: "290" }]},
        { name: "Shawarma", items: [{ name: "Arabic Chicken Shawarma", price: "250" }, { name: "Chicken Shawarma", price: "220" }]},
        { name: "Pasta & Noodles", items: [{ name: "Oven Baked Pasta", price: "280" }, { name: "Pan Pasta", price: "320" }, { name: "Vegetable Noodles", price: "180" }, { name: "Special Mixed Noodles", price: "260" }]}
      ]},
      { tab: "Beverages", subCategories: [
        { name: "Hot Coffee", items: [{ name: "Signature Coffee", price: "250" }, { name: "Cappuccino", price: "230" }, { name: "Espresso (Single)", price: "160" }, { name: "Espresso (Double)", price: "200" }, { name: "Americano (Single)", price: "180" }, { name: "Americano (Double)", price: "220" }, { name: "Latte", price: "260" }, { name: "Arabic Gahwa with Dates", price: "200" }]},
        { name: "Cold Coffee", items: [{ name: "Special Cold Coffee", price: "220" }, { name: "Iced Americano", price: "250" }, { name: "Iced Cappuccino", price: "300" }, { name: "Iced Latte", price: "350" }, { name: "Iced Mocha", price: "420" }, { name: "Iced Chocolate", price: "370" }]},
        { name: "Hot Tea", items: [{ name: "Tandoori Tea / Black Tea", price: "100" }, { name: "Ginger Tea", price: "120" }, { name: "Green Tea", price: "120" }, { name: "Honey Lime Tea", price: "150" }]},
        { name: "Cold Tea", items: [{ name: "Ice Tea", price: "200" }, { name: "Peach Ice Tea", price: "250" }, { name: "Strawberry Ice Tea", price: "250" }, { name: "Blueberry Ice Tea", price: "300" }, { name: "Mango Ice Tea", price: "280" }]},
        { name: "Shakes & Lassi", items: [{ name: "Chocolate Nutella Milk Shake", price: "320" }, { name: "Chocolate Milk Shake", price: "250" }, { name: "Vanilla Milk Shake", price: "250" }, { name: "Mango Milk Shake", price: "250" }, { name: "Strawberry Milk Shake", price: "250" }, { name: "Kit Kat Milk Shake", price: "300" }, { name: "Oreo Milk Shake", price: "300" }, { name: "Lassi", price: "200" }, { name: "Arabic Lassi", price: "250" }, { name: "Mango Lassi", price: "330" }]},
        { name: "Smoothies", items: [{ name: "Mango Smoothie", price: "380" }, { name: "Blueberry Smoothie", price: "400" }, { name: "Strawberry Smoothie", price: "380" }, { name: "Peach Smoothie", price: "380" }]},
        { name: "Fizzy Drinks", items: [{ name: "Mango Fizzy", price: "300" }, { name: "Blueberry Fizzy", price: "350" }, { name: "Strawberry Fizzy", price: "300" }, { name: "Peach Fizzy", price: "300" }]},
        { name: "Mocktails", items: [{ name: "Peach Lemonade Mocktail", price: "250" }, { name: "Lychee Lemonade Mocktail", price: "280" }, { name: "Mint Lemonade Mocktail", price: "200" }, { name: "Watermelon Mojito Mocktail", price: "250" }, { name: "Strawberry Mojito Mocktail", price: "250" }, { name: "Orange Mojito Mocktail", price: "350" }, { name: "Classic Mojito Mocktail", price: "220" }]},
        { name: "Soft Drinks (MRP)", items: [{ name: "Mojo (250ml)", price: "MRP" }, { name: "Mojo Can", price: "MRP" }, { name: "Clemon (250ml)", price: "MRP" }, { name: "Mineral Water (500ml)", price: "MRP" }, { name: "Alkaline Water (250ml / 650ml)", price: "MRP" }]},
        { name: "Fresh Seasonal Juices", items: [{ name: "Orange Juice", price: "300" }, { name: "Apple Juice", price: "280" }, { name: "Mango Juice", price: "250" }, { name: "Pomegranate Juice", price: "400" }, { name: "Grape Juice", price: "400" }, { name: "Papaya Juice", price: "200" }, { name: "Pineapple Juice", price: "200" }, { name: "Watermelon Juice", price: "250" }, { name: "Lemon Juice", price: "150" }]}
      ]},
      { tab: "Desserts", subCategories: [{ name: "Desserts", items: [{ name: "Indulgence Kunafa", prices: ["400", "600"], priceLabel: "Medium / Large" }, { name: "Firni Delight", prices: ["MRP", "80"], priceLabel: "Medium / Large" }, { name: "Silky Mahalabia", prices: ["MRP", "100"], priceLabel: "Medium / Large" }]}]},
      { tab: "Sets & Combos", subCategories: [
        { name: "Combo Meals", items: [{ name: "Easy 1", price: "280 / 300", desc: "Fried Rice, Crispy/Thai Fried Chicken, Chinese Vegetables" }, { name: "Desi Mixer 2", price: "350", desc: "Fried Rice, Desi Chicken Fry, Prawn Fry, Chinese Vegetables" }, { name: "Hungry 3", price: "420", desc: "Lemon Rice, Grilled Chicken, Mashed Potato, Sautéed Vegetables" }, { name: "Tandoori Fusion 4", price: "450", desc: "Butter Lemon Rice, Tandoori Chicken Quarter, Sautéed Vegetables" }, { name: "Chinese 5", price: "320", desc: "Fried Rice, Chicken Chilli Curry, Chinese Vegetables, Mixed Salad" }, { name: "Hot & Cool 6", price: "450", desc: "Fried Rice, Beef Masala, Chinese Vegetables, Mixed Salad" }]},
        { name: "Corporate Program Menus", isExpandable: true, items: [
          { name: "Program Menu 1", price: "699 / person", desc: "Plain Polau, Chicken Roast (1 Pc), Beef Rezala, Zali Kabab (1 Pc), Zarda, Fresh Salad, Borhani or Soft Drink, Mineral Water" },
          { name: "Program Menu 2", price: "799 / person", desc: "Plain Polau, Chicken Roast (1 Pc), Mutton Rezala, Zali Kabab (1 Pc), Zarda, Fresh Salad, Borhani or Soft Drink, Mineral Water" },
          { name: "Program Menu 3", price: "899 / person", desc: "Kacchi Biryani, Chicken Roast (1 Pc), Zali Kabab (1 Pc), Aloo Bukhara, Firni or Zarda, Fresh Salad, Borhani or Soft Drink, Mineral Water" },
          { name: "Program Menu 4", price: "1,299 / person", desc: "Plain Polau, Butter Naan, Chicken Malai Kebab, Beef Seekh Kebab, Mutton Boti Kebab, Fish Kabab, Beef Curry, Mutton Rogan Josh, Butter Chicken, Dal Makhani, Mixed Vegetable Curry, Fresh Salad, Raita, Chutney, Spicy Salad, Firni, Jorda, Shahi Tukra, Borhani, Soft Drink, Mineral Water" }
        ]},
        { name: "Office Lunch Menus", isExpandable: true, items: [
          { name: "Package 1 (Regular)", price: "280", desc: "Steam Rice, Chicken Curry, Mixed Vegetable, Masoor Dal, Fresh Salad" },
          { name: "Package 2 (Standard)", price: "350", desc: "Steam Rice, Beef Curry, Mixed Vegetable, Masoor Dal, Fresh Salad, Dessert (Sweet/Yogurt)" },
          { name: "Package 3 (Premium Polao)", price: "450", desc: "Plain Polau, Chicken Roast, Beef Rezala, Mixed Vegetable, Fresh Salad, Borhani, Dessert (Firni)" },
          { name: "Package 4 (Khichuri Special)", price: "380", desc: "Bhuna Khichuri, Chicken Roast, Egg, Mixed Vegetable, Fresh Salad, Dessert (Firni)" },
          { name: "Package 5 (Executive Premium)", price: "650", desc: "Plain Polau/Plain Rice, Beef Regela, Chicken Roast, Boti Kebab (1 Pc), Mixed Vegetable, Fresh Salad, Borhani, Dessert (Firni/Mishti)" }
        ]}
      ]}
    ];

    // ==========================================
    // MENU RENDERING
    // ==========================================
    let activeTab = "All";
    function renderTabs() {
      const c = document.getElementById('menuTabs');
      let h = `<button class="menu-tab active px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium" onclick="filterMenu('All')">All</button>`;
      menuData.forEach(cat => { h += `<button class="menu-tab px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium" onclick="filterMenu('${cat.tab}')">${cat.tab}</button>`; });
      c.innerHTML = h;
    }
    function filterMenu(tabName) {
      activeTab = tabName;
      document.querySelectorAll('.menu-tab').forEach(btn => { btn.classList.remove('active'); if(btn.textContent.trim()===tabName){ btn.classList.add('active'); }});
      renderMenu();
    }
    function renderMenu() {
      const c = document.getElementById('menuContent');
      let h = '';
      const data = activeTab === "All" ? menuData : menuData.filter(cat => cat.tab === activeTab);
      data.forEach((cat, ci) => {
        h += `<div class="mb-10 last:mb-0 ${ci>0?'pt-10 border-t border-white/5':''}">`;
        h += `<h3 class="font-display text-xl md:text-2xl font-semibold text-gold-400 mb-6">${cat.tab}</h3>`;
        cat.subCategories.forEach(sub => {
          h += `<div class="mb-8 last:mb-0">`;
          if(cat.subCategories.length>1||sub.name!==cat.tab) h += `<h4 class="text-xs uppercase tracking-[0.2em] text-neutral-600 font-medium mb-4 pb-2 border-b border-white/5">${sub.name}</h4>`;
          h += `<div class="space-y-0">`;
          sub.items.forEach((item, ii) => {
            const isLast = ii===sub.items.length-1;
            const pd = item.prices ? `৳ ${item.prices.join(" / ")}` : (item.price==="MRP"?"MRP":`৳ ${item.price}`);
            const sl = item.priceLabel ? `<span class="block text-[10px] text-neutral-600 tracking-wider uppercase">${item.priceLabel}</span>` : '';
            const dh = item.desc ? `<div class="expand-content text-neutral-500 text-xs leading-relaxed mt-2 pl-1">${item.desc}</div>` : '';
            const eb = (sub.isExpandable&&item.desc) ? `<button class="expand-btn text-neutral-600 hover:text-gold-400 transition-colors ml-2" onclick="toggleExpand(this)"><i data-icon="lucide:chevron-down" class="iconify" data-width="14"></i></button>` : '';
            h += `<div class="menu-item-row flex items-start justify-between py-3 px-2 rounded-lg ${!isLast?'border-b border-white/5':''}"><div class="flex-1 min-w-0"><div class="flex items-center"><span class="text-sm md:text-base font-medium text-white">${item.name}</span>${eb}</div>${dh}</div><div class="text-right ml-4 flex-shrink-0"><span class="text-sm md:text-base font-medium text-gold-400 whitespace-nowrap">${pd}</span>${sl}</div></div>`;
          });
          h += `</div></div>`;
        });
        h += `</div>`;
      });
      c.innerHTML = h;
    }
    function toggleExpand(btn) { const c=btn.parentElement.nextElementSibling; c.classList.toggle('open'); btn.classList.toggle('active'); }
    renderTabs(); renderMenu();

    // ==========================================
    // NAV, COUNTDOWN, PARTICLES, FORM
    // ==========================================
    const navbar=document.getElementById('navbar');
    window.addEventListener('scroll',()=>{navbar.classList.toggle('nav-scrolled',window.scrollY>50);});
    const menuBtn=document.getElementById('menuBtn'),mobileMenu=document.getElementById('mobileMenu'),bar1=document.getElementById('bar1'),bar2=document.getElementById('bar2'),bar3=document.getElementById('bar3');
    let menuOpen=false;
    menuBtn.addEventListener('click',()=>{menuOpen=!menuOpen;mobileMenu.classList.toggle('open');if(menuOpen){bar1.style.transform='rotate(45deg) translate(4px,4px)';bar2.style.opacity='0';bar3.style.transform='rotate(-45deg) translate(3px,-3px)';bar3.style.width='24px';document.body.style.overflow='hidden';}else{bar1.style.transform='';bar2.style.opacity='1';bar3.style.transform='';bar3.style.width='16px';document.body.style.overflow='';}});
    document.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',()=>{menuOpen=false;mobileMenu.classList.remove('open');bar1.style.transform='';bar2.style.opacity='1';bar3.style.transform='';bar3.style.width='16px';document.body.style.overflow='';}));

    function updateCountdown(){let t=new Date(new Date().getFullYear(),7,7);if(new Date()>t)t=new Date(t.getFullYear()+1,7,7);const d=t-new Date();if(d<=0)return;document.getElementById('days').textContent=String(Math.floor(d/(1e3*60*60*24))).padStart(2,'0');document.getElementById('hours').textContent=String(Math.floor((d%(1e3*60*60*24))/(1e3*60*60))).padStart(2,'0');document.getElementById('minutes').textContent=String(Math.floor((d%(1e3*60*60))/(1e3*60))).padStart(2,'0');document.getElementById('seconds').textContent=String(Math.floor((d%(1e3*60))/1e3)).padStart(2,'0');}
    updateCountdown();setInterval(updateCountdown,1000);

    const ro=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('active');});},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

    const pc=document.getElementById('particles');
    function cp(){const p=document.createElement('div');p.classList.add('particle');p.style.left=Math.random()*100+'%';p.style.bottom='0';p.style.animationDuration=(4+Math.random()*4)+'s';p.style.animationDelay=Math.random()*2+'s';p.style.width=(2+Math.random()*3)+'px';p.style.height=p.style.width;pc.appendChild(p);setTimeout(()=>p.remove(),8000);}
    setInterval(cp,500);for(let i=0;i<8;i++)setTimeout(cp,i*200);

    const form=document.getElementById('reservationForm'),toast=document.getElementById('toast');
    form.addEventListener('submit',function(e){e.preventDefault();const fd=new FormData(form);fetch(form.action,{method:'POST',body:fd,headers:{'Accept':'application/json'}}).then(r=>{if(r.ok){toast.classList.add('show');form.reset();setTimeout(()=>toast.classList.remove('show'),4000);}else alert('Something went wrong. Please try again.');}).catch(()=>alert('Network error. Please check connection.'));});

    document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'});});});
 