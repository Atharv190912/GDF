// EmailJS initialisation is handled in page.tsx onLoad

// Global exports for React components
window.setPaymentType = function(type) { if (typeof setPaymentType === 'function') setPaymentType(type); };

let tCurrent = 0;


  function tGoTo(index) {
    const track = document.getElementById('tTrack');
    const slides = track.querySelectorAll('.t-slide');
    const total = slides.length;
    tCurrent = (index + total) % total;
    slides.forEach((slide, i) => {
      slide.style.display = i === tCurrent ? 'block' : 'none';
    });
  }

  function tNext() { tGoTo(tCurrent + 1); }
  function tPrev() { tGoTo(tCurrent - 1); }

  document.addEventListener('DOMContentLoaded', () => tGoTo(0));

var COUNTRY_DATA = {
  "United Arab Emirates":["Abu Dhabi","Dubai","Sharjah","Ajman","Ras Al Khaimah","Fujairah","Umm Al Quwain","Al Ain","Khor Fakkan","Kalba"],
  "Afghanistan":["Kabul","Kandahar","Herat","Mazar-i-Sharif","Jalalabad"],
  "Algeria":["Algiers","Oran","Constantine","Annaba","Blida","Batna","Tlemcen"],
  "Argentina":["Buenos Aires","Córdoba","Rosario","Mendoza","La Plata","Tucumán","Mar del Plata","Salta"],
  "Australia":["Sydney","Melbourne","Brisbane","Perth","Adelaide","Gold Coast","Canberra","Newcastle","Hobart","Darwin"],
  "Austria":["Vienna","Graz","Linz","Salzburg","Innsbruck"],
  "Bahrain":["Manama","Riffa","Muharraq","Hamad Town"],
  "Bangladesh":["Dhaka","Chittagong","Khulna","Rajshahi","Sylhet","Comilla"],
  "Belgium":["Brussels","Antwerp","Ghent","Bruges","Liège","Leuven"],
  "Brazil":["São Paulo","Rio de Janeiro","Brasília","Salvador","Fortaleza","Belo Horizonte","Manaus","Curitiba","Recife","Porto Alegre"],
  "Canada":["Toronto","Montreal","Vancouver","Calgary","Ottawa","Edmonton","Winnipeg","Quebec City","Hamilton","Halifax"],
  "China":["Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu","Chongqing","Hangzhou","Wuhan","Xi'an","Nanjing","Tianjin","Suzhou"],
  "Egypt":["Cairo","Alexandria","Giza","Shubra El-Kheima","Port Said","Suez","Luxor","Aswan"],
  "France":["Paris","Marseille","Lyon","Toulouse","Nice","Nantes","Strasbourg","Montpellier","Bordeaux","Lille"],
  "Germany":["Berlin","Hamburg","Munich","Cologne","Frankfurt","Stuttgart","Düsseldorf","Dortmund","Leipzig","Bremen"],
  "India":["Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad","Jaipur","Surat","Lucknow","Kanpur","Nagpur","Visakhapatnam","Indore","Bhopal","Patna","Vadodara","Ludhiana","Agra","Coimbatore","Kochi"],
  "Indonesia":["Jakarta","Surabaya","Bandung","Medan","Bekasi","Tangerang","Depok","Semarang","Makassar","Batam","Yogyakarta","Bali"],
  "Iran":["Tehran","Mashhad","Isfahan","Karaj","Tabriz","Shiraz","Qom","Ahvaz"],
  "Iraq":["Baghdad","Basra","Mosul","Erbil","Najaf","Kirkuk"],
  "Ireland":["Dublin","Cork","Limerick","Galway","Waterford"],
  "Israel":["Tel Aviv","Jerusalem","Haifa","Rishon LeZion","Petah Tikva","Be'er Sheva"],
  "Italy":["Rome","Milan","Naples","Turin","Palermo","Genoa","Bologna","Florence","Venice","Catania"],
  "Japan":["Tokyo","Yokohama","Osaka","Nagoya","Sapporo","Fukuoka","Kobe","Kyoto","Kawasaki","Saitama"],
  "Jordan":["Amman","Zarqa","Irbid","Aqaba","Madaba"],
  "Kenya":["Nairobi","Mombasa","Kisumu","Nakuru","Eldoret"],
  "Kuwait":["Kuwait City","Al Ahmadi","Hawalli","Farwaniya","Salmiya"],
  "Lebanon":["Beirut","Tripoli","Sidon","Tyre","Jounieh"],
  "Malaysia":["Kuala Lumpur","Penang","Johor Bahru","Ipoh","Kota Kinabalu","Petaling Jaya","Shah Alam"],
  "Mexico":["Mexico City","Guadalajara","Monterrey","Puebla","Tijuana","Ciudad Juárez","León","Zapopan","Querétaro","Mérida"],
  "Morocco":["Casablanca","Rabat","Fès","Marrakech","Agadir","Tangier","Meknès","Oujda"],
  "Netherlands":["Amsterdam","Rotterdam","The Hague","Utrecht","Eindhoven","Tilburg","Groningen"],
  "New Zealand":["Auckland","Wellington","Christchurch","Hamilton","Tauranga","Dunedin"],
  "Nigeria":["Lagos","Kano","Ibadan","Kaduna","Port Harcourt","Abuja","Enugu","Benin City","Onitsha"],
  "Norway":["Oslo","Bergen","Stavanger","Trondheim","Drammen"],
  "Oman":["Muscat","Salalah","Sohar","Nizwa","Sur"],
  "Pakistan":["Karachi","Lahore","Faisalabad","Rawalpindi","Islamabad","Gujranwala","Peshawar","Multan","Hyderabad","Quetta"],
  "Palestine":["Gaza","Ramallah","Hebron","Nablus","Jenin"],
  "Philippines":["Manila","Quezon City","Davao","Caloocan","Cebu City","Zamboanga","Taguig"],
  "Poland":["Warsaw","Kraków","Łódź","Wrocław","Poznań","Gdańsk","Szczecin","Katowice"],
  "Portugal":["Lisbon","Porto","Braga","Amadora","Setúbal","Coimbra","Funchal"],
  "Qatar":["Doha","Al Wakrah","Al Khor","Al Rayyan","Dukhan"],
  "Romania":["Bucharest","Cluj-Napoca","Timișoara","Iași","Constanța","Brașov"],
  "Russia":["Moscow","Saint Petersburg","Novosibirsk","Yekaterinburg","Kazan","Nizhny Novgorod","Chelyabinsk","Samara","Omsk","Ufa","Krasnoyarsk","Rostov-on-Don"],
  "Saudi Arabia":["Riyadh","Jeddah","Mecca","Medina","Dammam","Khobar","Taif","Tabuk","Abha"],
  "Singapore":["Singapore"],
  "South Africa":["Johannesburg","Cape Town","Durban","Pretoria","Port Elizabeth","Soweto","Bloemfontein"],
  "South Korea":["Seoul","Busan","Incheon","Daegu","Daejeon","Gwangju","Suwon","Ulsan"],
  "Spain":["Madrid","Barcelona","Valencia","Seville","Zaragoza","Málaga","Murcia","Palma","Las Palmas","Bilbao"],
  "Sri Lanka":["Colombo","Dehiwala","Moratuwa","Jaffna","Kandy","Galle"],
  "Sweden":["Stockholm","Gothenburg","Malmö","Uppsala","Västerås","Örebro"],
  "Switzerland":["Zürich","Geneva","Basel","Bern","Lausanne","Winterthur"],
  "Thailand":["Bangkok","Chiang Mai","Nonthaburi","Pak Kret","Hat Yai","Pattaya","Phuket"],
  "Tunisia":["Tunis","Sfax","Sousse","Kairouan","Gabès"],
  "Turkey":["Istanbul","Ankara","Izmir","Bursa","Adana","Gaziantep","Konya","Antalya","Mersin","Diyarbakır"],
  "Ukraine":["Kyiv","Kharkiv","Odessa","Dnipro","Donetsk","Zaporizhzhia","Lviv"],
  "United Kingdom":["London","Birmingham","Manchester","Leeds","Glasgow","Liverpool","Sheffield","Edinburgh","Bristol","Cardiff","Leicester","Nottingham"],
  "United States":["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","Charlotte","Indianapolis","San Francisco","Seattle","Denver","Washington DC","Nashville","Oklahoma City","Miami","Las Vegas","Boston","Atlanta"],
  "Vietnam":["Hanoi","Ho Chi Minh City","Da Nang","Haiphong","Cần Thơ","Nha Trang"]
};

var COMMITTEES = [
  {id:'UNGA',name:'UNGA – United Nations General Assembly',portfolios:['United States','China','India','Russian Federation','United Kingdom','France','Germany','Japan','Brazil','Canada','Italy','South Africa','Mexico','Indonesia','Saudi Arabia','Turkey','Republic of Korea','Argentina','Egypt','Spain','Netherlands','Switzerland','Sweden','Norway','Denmark','Finland','Poland','Belgium','Ukraine','Pakistan','Bangladesh','Nigeria','Kenya','Ethiopia','Ghana','Morocco','Algeria','United Arab Emirates','Qatar','Israel','Iran','Iraq','Afghanistan','New Zealand','Chile','Peru','Colombia','Philippines','Vietnam']},
  {id:'UNSC',name:'UNSC – United Nations Security Council',portfolios:['United States','United Kingdom','France','Russian Federation','China','India','Brazil','Germany','Japan','South Africa','Nigeria','Mexico','Indonesia','Turkey','Saudi Arabia','Iran','Israel','Egypt','Pakistan','Bangladesh','Argentina','Canada','Australia','Italy','Spain','Netherlands','Belgium','Poland','Ukraine','Sweden','Norway','Denmark','Finland','Switzerland','Austria','Ireland','Portugal','Greece','Romania','Chile','Colombia','Peru','Philippines','Vietnam','Thailand','Malaysia','Kenya','Ghana','Ethiopia','New Zealand']},
  {id:'UNHRC',name:'UNHRC – Human Rights Council',portfolios:['United States','United Kingdom','France','Germany','Netherlands','Switzerland','Norway','Japan','Argentina','Mexico','Brazil','India','South Africa','Canada','Australia','Italy','Spain','Belgium','Sweden','Denmark','Finland','Ireland','Portugal','Poland','Ukraine','Romania','Greece','Turkey','Indonesia','Philippines','Vietnam','Thailand','Malaysia','Pakistan','Bangladesh','Sri Lanka','Nepal','Egypt','Morocco','Algeria','Tunisia','Nigeria','Kenya','Ghana','Ethiopia','Colombia','Peru','Chile','New Zealand','Austria']},
  {id:'CSW',name:'CSW – Commission on the Status of Women',portfolios:['United States','China','India','Brazil','South Africa','Nigeria','Indonesia','Bangladesh','Ethiopia','Mexico','Pakistan','Philippines','Vietnam','Egypt','Turkey','Iran','Iraq','Afghanistan','Kenya','Ghana','Morocco','Algeria','Colombia','Peru','Chile','Argentina','Saudi Arabia','United Arab Emirates','Qatar','Thailand','Malaysia','Singapore','Nepal','Sri Lanka','Myanmar','Cambodia','Laos','Uzbekistan','Kazakhstan','Ukraine','Poland','Romania','Greece','Italy','Spain','France','Germany','United Kingdom','Canada','Australia']},
  {id:'IMF',name:'IMF – International Monetary Fund',portfolios:['United States','China','Japan','Germany','United Kingdom','France','India','Italy','Canada','Brazil','Russia','Australia','Spain','Mexico','Indonesia','Netherlands','Saudi Arabia','Turkey','Switzerland','Argentina','Sweden','Poland','Belgium','Thailand','Ireland','Austria','Norway','United Arab Emirates','Israel','Singapore','Malaysia','Philippines','Vietnam','Pakistan','Bangladesh','South Africa','Nigeria','Kenya','Egypt','Morocco','Algeria','Chile','Colombia','Peru','Qatar','Greece','Portugal','Denmark','Finland','New Zealand']},
  {id:'WHO',name:'WHO – World Health Organization',portfolios:['Sweden','Norway','Finland','Denmark','Canada','Netherlands','Germany','Rwanda','New Zealand','Philippines','United States','United Kingdom','France','Spain','Italy','Belgium','Switzerland','Austria','Ireland','Portugal','Australia','Japan','South Korea','Argentina','Chile','Colombia','Peru','Mexico','Brazil','South Africa','Kenya','Ghana','Nigeria','Ethiopia','Morocco','Tunisia','Egypt','Turkey','Indonesia','Malaysia','Thailand','Vietnam','Bangladesh','Pakistan','Nepal','Sri Lanka','United Arab Emirates','Qatar','Saudi Arabia']},
  {id:'UNODC',name:'UNODC – UN Office on Drugs & Crime',portfolios:['Mexico','Colombia','United States','Afghanistan','Myanmar','Peru','Bolivia','Brazil','Nigeria','South Africa','Pakistan','Iran','Turkey','Thailand','Laos','Cambodia','Vietnam','Philippines','Indonesia','Malaysia','India','Bangladesh','Sri Lanka','Nepal','Kenya','Ghana','Ethiopia','Morocco','Algeria','Tunisia','Egypt','Argentina','Chile','Paraguay','Uruguay','Canada','Australia','United Kingdom','France','Germany','Italy','Spain','Netherlands','Belgium','Poland','Ukraine','Romania','Greece','Portugal','Ireland']},
  {id:'AIPPM',name:'AIPPM – All India Political Parties Meet',portfolios:['Narendra Modi','Rahul Gandhi','Amit Shah','Arvind Kejriwal','Mamata Banerjee','Yogi Adityanath','Nitin Gadkari','Sonia Gandhi','Mallikarjun Kharge','Sharad Pawar','Uddhav Thackeray','Eknath Shinde','Devendra Fadnavis','Tejashwi Yadav','Nitish Kumar','Lalu Prasad Yadav','Hemant Soren','Bhupesh Baghel','Ashok Gehlot','Sachin Pilot','Pinarayi Vijayan','MK Stalin','K Chandrashekar Rao','Revanth Reddy','Jagan Mohan Reddy','Chandrababu Naidu','HD Kumaraswamy','Basavaraj Bommai','Manohar Lal Khattar','Bhagwant Mann','Pramod Sawant','Himanta Biswa Sarma','Conrad Sangma','Neiphiu Rio','Naveen Patnaik','Biplab Deb','Manik Saha','Farooq Abdullah','Omar Abdullah','Mehbooba Mufti','Anurag Thakur','Smriti Irani','Rajnath Singh','S Jaishankar','Piyush Goyal','Kiren Rijiju','Jyotiraditya Scindia','Ghulam Nabi Azad','Asaduddin Owaisi','Kapil Sibal']},
  {id:'G20',name:'G20 Summit',portfolios:['Joe Biden','Xi Jinping','Narendra Modi','Rishi Sunak','Emmanuel Macron','Olaf Scholz','Giorgia Meloni','Justin Trudeau','Anthony Albanese','Luiz Inacio Lula da Silva','Cyril Ramaphosa','Mohammed bin Salman','Recep Tayyip Erdogan','Joko Widodo','Yoon Suk Yeol','Andres Manuel Lopez Obrador','Alberto Fernandez','Ursula von der Leyen','Kristalina Georgieva','Ajay Banga']},
  {id:'ICC',name:'ICC – International Cricket Council',portfolios:['India','Australia','England','South Africa','New Zealand','Pakistan','Sri Lanka','Bangladesh','Afghanistan','West Indies','Zimbabwe','Ireland','Netherlands','Scotland','United Arab Emirates','Nepal','Canada','Oman','Namibia','United States']},
  {id:'IPL',name:'IPL – Indian Premier League',portfolios:['Mumbai Indians','Chennai Super Kings','Royal Challengers Bangalore','Kolkata Knight Riders','Delhi Capitals','Rajasthan Royals','Sunrisers Hyderabad','Punjab Kings','Lucknow Super Giants','Gujarat Titans']},
  {id:'FIFA',name:'FIFA',portfolios:['Real Madrid','FC Barcelona','Manchester United','Manchester City','Liverpool FC','Chelsea FC','Arsenal FC','Bayern Munich','Borussia Dortmund','Paris Saint-Germain','Juventus','AC Milan','Inter Milan','Napoli','Atletico Madrid','Sevilla FC','Tottenham Hotspur','RB Leipzig','Ajax','PSV Eindhoven']},
  {id:'GCM',name:'Global Car Market',portfolios:['Toyota','Volkswagen','Ford','General Motors','Honda','Hyundai','Kia','BMW','Mercedes-Benz','Audi','Tesla','Nissan','Renault','Peugeot','Ferrari','Lamborghini','Porsche','Volvo','Jaguar','Land Rover']},
  {id:'F1',name:'F1 – Formula 1',portfolios:['Lewis Hamilton','Max Verstappen','Charles Leclerc','Lando Norris','George Russell','Carlos Sainz','Fernando Alonso','Sergio Perez','Oscar Piastri','Esteban Ocon','Pierre Gasly','Valtteri Bottas','Yuki Tsunoda','Daniel Ricciardo','Lance Stroll','Kevin Magnussen']},
  {id:'BMU',name:'Bollywood Meet-Up',portfolios:['Shah Rukh Khan','Salman Khan','Aamir Khan','Ranbir Kapoor','Ranveer Singh','Hrithik Roshan','Akshay Kumar','Ajay Devgn','Varun Dhawan','Tiger Shroff','Amitabh Bachchan','Rajinikanth','Deepika Padukone','Alia Bhatt','Katrina Kaif','Kareena Kapoor','Priyanka Chopra','Anushka Sharma','Shraddha Kapoor','Kiara Advani']},
  {id:'HMU',name:'Hollywood Meet-Up',portfolios:['Leonardo DiCaprio','Brad Pitt','Tom Cruise','Robert Downey Jr.','Chris Evans','Chris Hemsworth','Scarlett Johansson','Jennifer Lawrence','Margot Robbie','Emma Stone','Zendaya','Timothee Chalamet','Dwayne Johnson','Ryan Reynolds','Hugh Jackman','Will Smith']},
  {id:'BRC',name:'Brain Rot Council (Crisis)',portfolios:['IShowSpeed','Kai Cenat','MrBeast','Adin Ross','xQc','Pokimane','KSI','Logan Paul','Jake Paul','Dream','Technoblade','TommyInnit']},
  {id:'MDC',name:'Marvel vs DC (Crisis)',portfolios:['Iron Man','Captain America','Thor','Hulk','Black Widow','Hawkeye','Spider-Man','Doctor Strange','Black Panther','Captain Marvel','Scarlet Witch','Vision','Ant-Man','Batman','Superman','Wonder Woman','Flash','Aquaman','Cyborg','Green Lantern']},
  {id:'ST',name:'Stranger Things (Crisis)',portfolios:['Eleven','Mike Wheeler','Dustin Henderson','Lucas Sinclair','Will Byers','Max Mayfield','Jim Hopper','Joyce Byers','Nancy Wheeler','Jonathan Byers','Steve Harrington','Robin Buckley','Billy Hargrove','Vecna','Demogorgon']},
  {id:'PM',name:'Pokémon (Crisis)',portfolios:['Ash Ketchum','Pikachu','Misty','Brock','Gary Oak','Professor Oak','Team Rocket','Jessie','James','Meowth','Charizard','Bulbasaur','Squirtle','Greninja','Lucario','Mewtwo','Mew']}
];

var regRole='', selectedComms=[], chairPrefs=[], currentPaymentType='international';

function setPaymentType(type) {
  currentPaymentType = type;
  const intlBtn = document.getElementById('payTypeIntl');
  const indBtn = document.getElementById('payTypeIndian');
  const intlDetails = document.getElementById('payDetailsIntl');
  const indDetails = document.getElementById('payDetailsIndian');
  const colCard4 = document.getElementById('col_card4');
  const colBank = document.getElementById('col_bankname');
  const lblChName = document.getElementById('lbl_chname');
  const lblTransRef = document.getElementById('lbl_transref');

  if (!intlBtn || !indBtn || !intlDetails || !indDetails) return;

  if (type === 'international') {
    intlBtn.style.background = '#1a2740'; // var(--navy)
    intlBtn.style.color = 'white';
    indBtn.style.background = 'transparent';
    indBtn.style.color = 'inherit';
    intlDetails.style.display = 'block';
    indDetails.style.display = 'none';
    if (colCard4) colCard4.style.display = 'block';
    if (colBank) colBank.style.display = 'block';
    if (lblChName) lblChName.innerHTML = 'Cardholder / Account Name <span class="req">*</span>';
    if (lblTransRef) lblTransRef.innerHTML = 'Transaction Reference <span class="req">*</span>';
  } else {
    indBtn.style.background = '#1a2740'; // var(--navy)
    indBtn.style.color = 'white';
    intlBtn.style.background = 'transparent';
    intlBtn.style.color = 'inherit';
    intlDetails.style.display = 'none';
    indDetails.style.display = 'block';
    if (colCard4) colCard4.style.display = 'none';
    if (colBank) colBank.style.display = 'none';
    if (lblChName) lblChName.innerHTML = 'Name <span class="req">*</span>';
    if (lblTransRef) lblTransRef.innerHTML = 'Transaction ID <span class="req">*</span>';
  }
}
window.setPaymentType = setPaymentType;



function openReg(){
  regRole='';
  selectedComms=[];
  chairPrefs=[];
  var rd=document.getElementById('roleDelegate'),rc=document.getElementById('roleChair'),re=document.getElementById('roleError');
  if(rd)rd.classList.remove('selected');
  if(rc)rc.classList.remove('selected');
  if(re)re.style.display='none';
  
  // Reset payment type to international
  if (typeof window.setPaymentType === 'function') window.setPaymentType('international');
  
  goRegStep(0);
  document.getElementById('regBackdrop').style.display='flex';
}
window.openReg = openReg;


function closeReg(){document.getElementById('regBackdrop').style.display='none';}
function openSvc(){document.getElementById('svcOverlay').classList.add('open');}
function closeSvc(){document.getElementById('svcOverlay').classList.remove('open');}
function tryOpenAdm(){
  document.getElementById('admOverlay').style.display='flex';
}
window.tryOpenAdm = tryOpenAdm;

function checkAdm(){
  const u = document.getElementById('admUser').value;
  const p = document.getElementById('admPass').value;
  if(u === 'GDF@Atharv' && p === 'NASA@412919') {
    document.getElementById('admOverlay').style.display='none';
    openAdmPortal();
  } else {
    alert('Invalid credentials');
  }
}
window.checkAdm = checkAdm;

async function openAdmPortal() {
  document.getElementById('admPortal').style.display = 'block';
  const u = 'GDF@Atharv';
  const p = 'NASA@412919';
  
  try {
    const res = await fetch(`/api/applications?user=${encodeURIComponent(u)}&pass=${encodeURIComponent(p)}`);
    const apps = await res.json();
    renderAdmContent(apps);
  } catch (err) {
    console.error('Failed to load applications:', err);
  }
}

function renderAdmContent(apps) {
  const container = document.getElementById('admContent');
  if(!container) return;
  
  // Stats
  document.getElementById('statD').textContent = apps.filter(a => a.type === 'delegate').length;
  document.getElementById('statC').textContent = apps.filter(a => a.type === 'chair').length;
  document.getElementById('statT').textContent = apps.filter(a => a.type === 'team').length;

  let html = `<table class="adm-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Details</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>`;

  apps.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)).forEach(app => {
    const details = app.type === 'delegate' 
      ? `Comm: ${app.committees.map(c => c.id).join(', ')}` 
      : app.type === 'chair' ? 'Chair App' : 'Team App';
      
    html += `<tr>
      <td><span class="type-badge ${app.type}">${app.type}</span></td>
      <td>${app.name}</td>
      <td>${details}</td>
      <td><span class="status-badge ${app.status}">${app.status}</span></td>
      <td>
        ${app.status === 'pending' ? `
          <button class="btn-s btn-acc" onclick="updateAppStatus('${app.id}', 'accepted')">Accept</button>
          <button class="btn-s btn-dec" onclick="updateAppStatus('${app.id}', 'declined')">Decline</button>
        ` : ''}
      </td>
    </tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}
window.renderAdmContent = renderAdmContent;

async function updateAppStatus(id, status) {
  const u = 'GDF@Atharv';
  const p = 'NASA@412919';
  try {
    const res = await fetch('/api/applications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status, user: u, pass: p })
    });
    if(res.ok) openAdmPortal();
  } catch (err) {
    alert('Update failed');
  }
}
window.updateAppStatus = updateAppStatus;


function selectRole(role){regRole=role;document.getElementById('roleDelegate').classList.toggle('selected',role==='delegate');document.getElementById('roleChair').classList.toggle('selected',role==='chair');document.getElementById('roleError').style.display='none';}

var DELEGATE_STEPS=[0,1,2,3,4,5],CHAIR_STEPS=[0,'c1','c2','c3',5];

function goRegStep(n){
  ['rStep0','rStep1','rStep2','rStep3','rStep4','rStep5','cStep1','cStep2','cStep3'].forEach(function(id){var el=document.getElementById(id);if(el)el.style.display='none';});
  var panelId=(typeof n==='string'&&n.charAt(0)==='c')?('cStep'+n.substring(1)):('rStep'+n);
  var el=document.getElementById(panelId);if(el)el.style.display='block';
  updateStepDots(n);
  var modal=document.querySelector('#regBackdrop .modal');if(modal)modal.scrollTop=0;
}
function updateStepDots(current){
  var steps=regRole==='chair'?CHAIR_STEPS:DELEGATE_STEPS,idx=steps.indexOf(current);
  ['rs0','rs1','rs2','rs3','rs4'].forEach(function(did,i){var dot=document.getElementById(did);if(!dot)return;dot.className='s-dot'+(i<idx?' done':i===idx?' on':'');});
  ['rl01','rl12','rl23','rl34'].forEach(function(lid,i){var line=document.getElementById(lid);if(line)line.className='s-line'+(idx>i+1?' done':'');});
}
function regNext(step){
  if(step===0){if(!regRole){document.getElementById('roleError').style.display='block';return;}if(regRole==='delegate'){initCountryDropdown('d_country');goRegStep(1);}else{initCountryDropdown('c_country');goRegStep('c1');}}
  else if(step===1){if(!v('d_fn')||!v('d_ln')||!v('d_age')||!v('d_ph')||!v('d_em')||!v('d_addr')){alert('Please fill in all required fields.');return;}buildCommitteeGrid();goRegStep(2);}
  else if(step===2){if(selectedComms.length===0){alert('Please select at least 1 committee.');return;}buildPortfolioFields(selectedComms);goRegStep(3);}
  else if(step===3){document.getElementById('payRef2').textContent='GDF-'+v('d_fn').substring(0,3).toUpperCase()+v('d_ln').substring(0,3).toUpperCase();goRegStep(4);}
}
function regBack(step){if(step===2)goRegStep(1);else if(step===3)goRegStep(2);else if(step===4)goRegStep(3);else goRegStep(0);}
function chairNext(step){
  if(step===1){if(!v('c_fn')||!v('c_ln')||!v('c_age')||!v('c_ph')||!v('c_em')||!v('c_addr')||!v('c_school')){alert('Please fill in all required fields.');return;}goRegStep('c2');}
  else if(step===2){if(!v('c_exp_level')||!v('c_conferences')||!v('c_skills')||!v('c_why')){alert('Please fill in all required fields.');return;}buildChairCommGrid();goRegStep('c3');}
  else if(step===3){if(chairPrefs.length<1){alert('Please select at least 1 committee preference.');return;}submitChair();}
}
function chairBack(step){if(step===2)goRegStep('c1');else if(step===3)goRegStep('c2');else goRegStep(0);}

/* ── Helper: build one card element ── */
function makeCommCard(c, clickFn) {
  var isCrisis = c.name.indexOf('Crisis') > -1;
  var abbr = c.id;
  var nameMap = {
    UNGA:'United Nations General Assembly', UNSC:'United Nations Security Council',
    UNHRC:'Human Rights Council', CSW:'Commission on the Status of Women',
    IMF:'International Monetary Fund', WHO:'World Health Organization',
    UNODC:'UN Office on Drugs & Crime', AIPPM:'All India Political Parties Meet',
    G20:'G20 Summit', ICC:'International Cricket Council',
    IPL:'Indian Premier League', FIFA:'FIFA',
    GCM:'Global Car Market', F1:'Formula 1',
    BMU:'Bollywood Meet-Up', HMU:'Hollywood Meet-Up',
    BRC:'Brain Rot Council', MDC:'Marvel vs DC',
    ST:'Stranger Things', PM:'Pokémon'
  };
  var shortName = nameMap[c.id] || c.name;

  var div = document.createElement('div');
  div.className = 'comm-card';
  div.setAttribute('data-id', c.id);
  div.innerHTML =
    '<span class="comm-card-abbr">' + abbr + '</span>' +
    '<span class="comm-card-name">' + shortName + '</span>' +
    (isCrisis ? '<span class="comm-crisis-pill">Crisis</span>' : '');
  div.addEventListener('click', function() { clickFn(div, c.id); });
  return div;
}

/* ── Helper: build section label element ── */
function makeSection(label) {
  var div = document.createElement('div');
  div.className = 'comm-section-lbl';
  div.textContent = label;
  return div;
}

/* ── DELEGATE – buildCommitteeGrid (rStep2) ── */
function buildCommitteeGrid() {
  selectedComms = [];
  var grid = document.getElementById('committeeGrid');
  grid.innerHTML = '';

  var sections = [
    { label: 'UN Committees', ids: ['UNGA','UNSC','UNHRC','CSW','IMF','WHO','UNODC','AIPPM','G20'] },
    { label: 'Specialised Committees', ids: ['ICC','IPL','FIFA','GCM','F1','BMU','HMU'] },
    { label: 'Crisis Committees', ids: ['BRC','MDC','ST','PM'] }
  ];

  sections.forEach(function(sec) {
    grid.appendChild(makeSection(sec.label));
    sec.ids.forEach(function(id) {
      var c = COMMITTEES.find(function(x) { return x.id === id; });
      if (c) grid.appendChild(makeCommCard(c, toggleComm));
    });
  });

  updateCommCount();
}

function toggleComm(el, id) {
  var idx = selectedComms.indexOf(id);
  if (idx > -1) {
    selectedComms.splice(idx, 1);
    el.classList.remove('comm-selected');
  } else {
    if (selectedComms.length >= 3) { alert('Maximum 3 committees allowed.'); return; }
    selectedComms.push(id);
    el.classList.add('comm-selected');
  }
  updateCommCount();
}

function updateCommCount() {
  var n = selectedComms.length;
  var el = document.getElementById('commSelCount');
  if (!el) return;
  el.textContent = n + ' / 3 selected';
  el.className = 'comm-sel-count ' + (n === 0 ? 'c0' : n < 3 ? 'c-partial' : 'c-full');

  var cards = document.querySelectorAll('#committeeGrid .comm-card');
  cards.forEach(function(card) {
    var isSelected = card.classList.contains('comm-selected');
    if (!isSelected) {
      card.classList.toggle('comm-disabled', n >= 3);
    }
  });
}

/* ── CHAIR – buildChairCommGrid (cStep3) ── */
function buildChairCommGrid() {
  chairPrefs = [];
  var grid = document.getElementById('chairCommGrid');
  grid.innerHTML = '';

  var sections = [
    { label: 'UN Committees', ids: ['UNGA','UNSC','UNHRC','CSW','IMF','WHO','UNODC','AIPPM','G20'] },
    { label: 'Specialised Committees', ids: ['ICC','IPL','FIFA','GCM','F1','BMU','HMU'] },
    { label: 'Crisis Committees', ids: ['BRC','MDC','ST','PM'] }
  ];

  sections.forEach(function(sec) {
    grid.appendChild(makeSection(sec.label));
    sec.ids.forEach(function(id) {
      var c = COMMITTEES.find(function(x) { return x.id === id; });
      if (c) grid.appendChild(makeCommCard(c, toggleChairComm));
    });
  });

  updateChairCommCount();
}

function toggleChairComm(el, id) {
  var idx = chairPrefs.indexOf(id);
  if (idx > -1) {
    chairPrefs.splice(idx, 1);
  } else {
    if (chairPrefs.length >= 3) { alert('Maximum 3 preferences allowed.'); return; }
    chairPrefs.push(id);
  }
  refreshChairCommGrid();
  updateChairCommCount();
}

function refreshChairCommGrid() {
  var rankClass  = ['pref1','pref2','pref3'];
  var rankLabels = ['1st','2nd','3rd'];

  document.querySelectorAll('#chairCommGrid .comm-card').forEach(function(card) {
    var id  = card.getAttribute('data-id');
    var idx = chairPrefs.indexOf(id);

    card.classList.remove('pref1','pref2','pref3','comm-disabled');

    var old = card.querySelector('.pref-num-badge');
    if (old) old.remove();

    if (idx > -1) {
      card.classList.add(rankClass[idx]);
      var badge = document.createElement('span');
      badge.className = 'pref-num-badge';
      badge.textContent = rankLabels[idx];
      card.appendChild(badge);
    } else {
      if (chairPrefs.length >= 3) {
        card.classList.add('comm-disabled');
      }
    }
  });
}

function updateChairCommCount() {
  var n  = chairPrefs.length;
  var el = document.getElementById('chairCommCount');
  if (!el) return;
  el.textContent = n + ' / 3 selected';
  el.className = 'comm-sel-count ' + (n === 0 ? 'c0' : n < 3 ? 'c-partial' : 'c-full');
}

async function buildPortfolioFields(comms) {
  const container = document.getElementById('portfolioFields');
  if(!container) return;
  container.innerHTML = '<p style="font-size:.85rem;color:#666;">Checking portfolio availability...</p>';

  // Fetch allotted portfolios from our local DB
  let allotted = [];
  try {
    const res = await fetch('/api/applications?allotted=true');
    const apps = await res.json();
    // Get all accepted delegate portfolios
    allotted = apps
      .filter(a => a.type === 'delegate' && a.status === 'accepted')
      .flatMap(a => a.committees.map(c => `${c.id}:${c.portfolio}`));
  } catch (err) {
    console.error('Failed to fetch allotted portfolios');
  }

  let html = '';
  comms.forEach(c => {
    html += `<div class="mf">
      <label class="ml"><b>${c.name}</b> portfolio <span class="req">*</span></label>
      <select class="mi" id="pf_${c.id}">
        <option value="">Select a portfolio</option>
        ${c.portfolios.map(p => {
          const isTaken = allotted.includes(`${c.id}:${p}`);
          return `<option value="${p}" ${isTaken ? 'disabled style="color:#ccc"' : ''}>${p}${isTaken ? ' (Allotted)' : ''}</option>`;
        }).join('')}
      </select>
    </div>`;
  });
  container.innerHTML = html;
}
window.buildPortfolioFields = buildPortfolioFields;

function initCountryDropdown(selId){var sel=document.getElementById(selId);if(!sel||sel.options.length>1)return;Object.keys(COUNTRY_DATA).sort().forEach(function(c){var opt=document.createElement('option');opt.value=c;opt.textContent=c;sel.appendChild(opt);});}
function onCountryChange(){var country=document.getElementById('d_country').value,cityEl=document.getElementById('d_city'),emirRow=document.getElementById('emirate_row');cityEl.innerHTML='<option value="">City / Region *</option>';if(country&&COUNTRY_DATA[country])COUNTRY_DATA[country].forEach(function(city){var opt=document.createElement('option');opt.value=city;opt.textContent=city;cityEl.appendChild(opt);});emirRow.style.display=country==='United Arab Emirates'?'block':'none';if(country!=='United Arab Emirates')document.getElementById('d_emirate').value='';}
function onChairCountryChange(){var country=document.getElementById('c_country').value,cityEl=document.getElementById('c_city'),emirRow=document.getElementById('c_emirate_row');cityEl.innerHTML='<option value="">City / Region *</option>';if(country&&COUNTRY_DATA[country])COUNTRY_DATA[country].forEach(function(city){var opt=document.createElement('option');opt.value=city;opt.textContent=city;cityEl.appendChild(opt);});emirRow.style.display=country==='United Arab Emirates'?'block':'none';if(country!=='United Arab Emirates')document.getElementById('c_emirate').value='';}
function v(id){var el=document.getElementById(id);return el?el.value.trim():'';}
function submitDelegate(){
  if (currentPaymentType === 'international') {
    if(!v('d_chname')||!v('d_card4')||!v('d_bankname')||!v('d_transref')||!v('d_transdate')){
      alert('Please fill in all payment details.');
      return;
    }
  } else {
    if(!v('d_chname')||!v('d_transref')||!v('d_transdate')){
      alert('Please fill in all payment details.');
      return;
    }
  }

  var app={
    id:'DEL'+Date.now().toString().slice(-6),
    fname:v('d_fn'),
    lname:v('d_ln'),
    age:v('d_age'),
    phone:v('d_ph'),
    email:v('d_em'),
    address:v('d_addr')+', '+v('d_emirate')+', '+v('d_country'),
    committees:selectedComms,
    portfolios:{},
    paymentType: currentPaymentType,
    cardName:v('d_chname'),
    cardLast4:v('d_card4'),
    bankName:v('d_bankname'),
    transRef:v('d_transref'),
    transDate:v('d_transdate'),
    date:new Date().toLocaleString()
  };

  selectedComms.forEach(function(id){
    var el=document.getElementById('pf_'+id);
    app.portfolios[id]=el?el.value:'';
  });

  var extraHtml = '<b>Method:</b> ' + (currentPaymentType === 'international' ? 'International' : 'Indian (UPI)') + 
                  '<br><b>Name:</b> ' + app.cardName + 
                  (currentPaymentType === 'international' ? ('<br><b>Last 4:</b> ****' + app.cardLast4 + '<br><b>Bank:</b> ' + app.bankName) : '') + 
                  '<br><b>Ref/ID:</b> ' + app.transRef;

  showConfirmation('Delegate',app.id,app.fname+' '+app.lname,app.email,'Committees: '+app.committees.join(', ')+'<br>'+extraHtml);
  
  if(typeof emailjs!=='undefined'){
    emailjs.send('service_gdfinternational','template_h75i69m',{
      app_type:'Delegate Registration',
      app_id:app.id,
      full_name:app.fname+' '+app.lname,
      age:app.age,
      email:app.email,
      phone:app.phone,
      address:app.address,
      details:'Committees: '+app.committees.join(', '),
      extra:'Method: '+currentPaymentType+' | Name: '+app.cardName+' | Ref: '+app.transRef+' | Bank: '+app.bankName+' | Last 4: '+app.cardLast4+' | Portfolios: '+JSON.stringify(app.portfolios),
  const appData = {
    type: 'delegate',
    name: v('d_fn')+' '+v('d_ln'),
    email: v('d_em'),
    phone: v('d_ph'),
    committees: selectedComms.map(c => {
      const portfolio = document.getElementById('pf_'+c).value;
      return { id: c, portfolio };
    }),
    payment: {
      method: currentPaymentType,
      ref: v('d_transref'),
      date: v('d_transdate')
    }
  };
  fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appData)
  }).catch(err => console.error('DB Error:', err));
  const extra = `Payment: ${currentPaymentType.toUpperCase()} | Ref: ${v('d_transref')} | Date: ${v('d_transdate')}`;
  emailjs.send("service_x9r225b","template_h75i69m",{
    to_name: "Admin",
    from_name: v('d_fn')+' '+v('d_ln'),
    from_email: v('d_em'),
    role: "Delegate",
    details: 'Committees: '+selectedComms.join(', '),
    extra: extra
  }).then(function(){
    document.getElementById('confirmTitle').textContent='Application Submitted!';
    document.getElementById('confirmMsg').textContent='Thank you for registering. We have received your application and will review your payment shortly.';
    goRegStep(5);
  }, function(err){
    alert('Submission failed. Please try again.');
  });
}

function submitChair(){
  const appData = {
    type: 'chair',
    name: v('c_fn')+' '+v('c_ln'),
    email: v('c_em'),
    prefs: chairPrefs,
    school: v('c_school')
  };
  fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appData)
  }).catch(err => console.error('DB Error:', err));
  emailjs.send("service_x9r225b","template_h75i69m",{
    to_name: "Admin",
    from_name: v('c_fn')+' '+v('c_ln'),
    from_email: v('c_em'),
    role: "Chair",
    details: 'Prefs: '+chairPrefs.join(', '),
    extra: 'School: '+v('c_school')
  }).then(function(){
    document.getElementById('confirmTitle').textContent='Application Submitted!';
    document.getElementById('confirmMsg').textContent='Thank you. We will review your chair application and notify you by email.';
    goRegStep(5);
  });
}

async function checkAllottedPortfolios(email) {
  const res = await fetch(`/api/allotted?email=${email}`);
  return await res.json();
}

function adminLogin() {
  const p = prompt('Admin Password:');
  if(p === 'admin123') localStorage.setItem('isAdmin', 'true');
}

function showConfirmation(roleLabel,id,name,email,extraHtml){document.getElementById('confirmTitle').textContent=roleLabel+' Application Submitted!';document.getElementById('confirmMsg').innerHTML='Thank you! Our team will verify your payment within <strong>2–3 business days</strong>. '+(roleLabel==='Chair'?'We will review your chair application and notify you by email.':"Once approved you'll receive your committee and portfolio assignment by email.");document.getElementById('regSummary').innerHTML='<b>Application ID:</b> '+id+'<br><b>Name:</b> '+name+'<br><b>Email:</b> '+email+'<br><b>Role:</b> '+roleLabel+'<br>'+extraHtml+'<br><b>Status:</b> Submitted — confirmation email on its way.';goRegStep(5);}

function openTeamApp(){
  ['tStep1','tStep2','tStep3','tStep4'].forEach(function(id){var el=document.getElementById(id);if(el)el.style.display='none';});
  document.getElementById('tStep1').style.display='block';
  ['tm_fn','tm_ln','tm_age','tm_ph','tm_em','tm_addr','tm_exp','tm_why'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});
  var dept=document.getElementById('tm_dept');if(dept)dept.value='';
  var country=document.getElementById('tm_country');if(country)country.value='';
  var city=document.getElementById('tm_city');if(city)city.value='';
  document.getElementById('tm_e1').style.display='none';
  document.getElementById('tm_e2').style.display='none';
  updateTeamDots(1);
  document.getElementById('teamBackdrop').style.display='flex';
  var modal=document.querySelector('#teamBackdrop .modal');if(modal)modal.scrollTop=0;
}
function closeTeamApp(){document.getElementById('teamBackdrop').style.display='none';}
function updateTeamDots(current){
  ['ts1','ts2','ts3'].forEach(function(did,i){var dot=document.getElementById(did);if(!dot)return;var stepNum=i+1;if(stepNum<current){dot.className='s-dot done';dot.textContent='✓';}else if(stepNum===current){dot.className='s-dot on';dot.textContent=stepNum;}else{dot.className='s-dot';dot.textContent=stepNum;}});
  ['tl01','tl12','tl23'].forEach(function(lid,i){var line=document.getElementById(lid);if(line)line.className='s-line'+(current>i+1?' done':'');});
}
function teamNext(step){
  if(step===1){var fn=tv('tm_fn'),ln=tv('tm_ln'),age=tv('tm_age'),ph=tv('tm_ph'),em=tv('tm_em'),addr=tv('tm_addr'),dept=document.getElementById('tm_dept').value,country=document.getElementById('tm_country').value,city=document.getElementById('tm_city').value;if(!fn||!ln||!age||!ph||!em||!addr||!dept||!country||!city){document.getElementById('tm_e1').style.display='block';return;}document.getElementById('tm_e1').style.display='none';goTeamStep(2);}
  else if(step===2){if(!tv('tm_exp')||!tv('tm_why')){document.getElementById('tm_e2').style.display='block';return;}document.getElementById('tm_e2').style.display='none';buildTeamReview();goTeamStep(3);}
}
function teamBack(step){if(step===2)goTeamStep(1);else if(step===3)goTeamStep(2);}
function goTeamStep(n){['tStep1','tStep2','tStep3','tStep4'].forEach(function(id){var el=document.getElementById(id);if(el)el.style.display='none';});var el=document.getElementById('tStep'+n);if(el)el.style.display='block';updateTeamDots(n);var modal=document.querySelector('#teamBackdrop .modal');if(modal)modal.scrollTop=0;}
function buildTeamReview(){var rows=[['Name',tv('tm_fn')+' '+tv('tm_ln')],['Age',tv('tm_age')],['Email',tv('tm_em')],['Phone',tv('tm_ph')],['Address',tv('tm_addr')+', '+document.getElementById('tm_city').value+', '+document.getElementById('tm_country').value],['Department',document.getElementById('tm_dept').value],['Experience',tv('tm_exp')],['Why GDF',tv('tm_why')]];document.getElementById('tm_review').innerHTML=rows.map(function(r){return'<b>'+r[0]+':</b> '+r[1]+'<br>';}).join('');}
function teamSubmit(){
  const appData = {
    type: 'team',
    name: tv('tm_fn')+' '+tv('tm_ln'),
    age: tv('tm_age'),
    email: tv('tm_em'),
    phone: tv('tm_ph'),
    address: tv('tm_addr')+', '+document.getElementById('tm_city').value+', '+document.getElementById('tm_country').value,
    department: document.getElementById('tm_dept').value,
    experience: tv('tm_exp'),
    why: tv('tm_why')
  };
  fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appData)
  }).catch(err => console.error('DB Error:', err));
  
  var appId='TEAM'+Date.now().toString().slice(-6);document.getElementById('tm_appid').innerHTML='<b>Application ID:</b> '+appId+'<br><b>Name:</b> '+tv('tm_fn')+' '+tv('tm_ln')+'<br><b>Email:</b> '+tv('tm_em')+'<br><b>Department:</b> '+document.getElementById('tm_dept').value+'<br><b>Status:</b> Submitted — we\'ll be in touch soon.';goTeamStep(4);if(typeof emailjs!=='undefined'){emailjs.send('service_gdfinternational','template_h75i69m',{app_type:'Team Application',app_id:appId,full_name:tv('tm_fn')+' '+tv('tm_ln'),age:tv('tm_age'),email:tv('tm_em'),phone:tv('tm_ph'),address:tv('tm_addr')+', '+document.getElementById('tm_city').value+', '+document.getElementById('tm_country').value,details:'Department: '+document.getElementById('tm_dept').value,extra:'Experience: '+tv('tm_exp')+' | Why GDF: '+tv('tm_why'),date:new Date().toLocaleString()}).catch(function(err){console.warn('EmailJS:',err);});}}
function tv(id){var el=document.getElementById(id);return el?el.value.trim():'';}

function sendContact(){
  var fname=document.getElementById('cFname').value.trim(),lname=document.getElementById('cLname').value.trim(),email=document.getElementById('cEmail').value.trim(),msg=document.getElementById('cMsg').value.trim(),status=document.getElementById('cStatus'),btn=document.getElementById('cBtn');
  if(!fname||!lname||!email||!msg){status.style.display='block';status.style.color='#c0392b';status.textContent='Please fill in all required fields.';return;}
  btn.disabled=true;btn.textContent='Sending…';status.style.display='none';
  emailjs.send('service_contactus','template_vkr9e0i',{from_name:fname+' '+lname,from_email:email,message:msg,to_email:'globaldiplomaticfoundaiton@gmail.com'})
    .then(function(){status.style.display='block';status.style.color='#27ae60';status.textContent="Message sent! We'll be in touch shortly.";['cFname','cLname','cEmail','cMsg'].forEach(function(id){document.getElementById(id).value='';});btn.textContent='Send Message';btn.disabled=false;})
    .catch(function(err){status.style.display='block';status.style.color='#c0392b';status.textContent='Something went wrong. Please try again.';console.error('EmailJS error:',err);btn.textContent='Send Message';btn.disabled=false;});
}