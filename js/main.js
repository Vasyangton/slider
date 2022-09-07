document.addEventListener('DOMContentLoaded', () => {
    /*! Lazy Load 2.0.0-rc.2 - MIT license - Copyright 2007-2019 Mika Tuupola */
     !function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});

     lazyload();

     // Step form
     // main form
      (function(s, t, e, p, f, o, r, m) {
        s[t] = s[t] || {};
        s[t][917545341] = {
            id: "LhAGcyr",
            rnd: 917545341,
            popup: true,
            showType: "link",
            overlayColor: "#000000",
            overlayOpacity: 70
        };
        e.async = true;
        e.src = p + f;
        document[m](o)[r](e)
    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u013641.stepform.io/api.js?id=LhAGcyr","head","appendChild","querySelector"));

     // masters
     (function(s, t, e, p, f, o, r, m) {
        s[t] = s[t] || {};
        s[t][917519014] = {
            id: "fT408fA",
            rnd: 917519014,
            popup: true,
            showType: "link",
            overlayColor: "#000000",
            overlayOpacity: 70
        };
        e.async = true;
        e.src = p + f;
        document[m](o)[r](e)
    }(window,"stepFORM_params",document.createElement("script"),document.location.protocol==="https:"?"https:":"http:","//u013641.stepform.io/api.js?id=fT408fA","head","appendChild","querySelector"));

     // Mobile menu
     const headerToggleBtn = document.querySelector('.menu-toggle');
     const menuMobile = document.querySelector('.site-header');
     headerToggleBtn.addEventListener('click', () => {
          menuMobile.classList.toggle('show-menu');
          document.querySelector('html').classList.toggle('locked');
     });
     
     const mobileMenuLinks = menuMobile.querySelectorAll('nav a');
     mobileMenuLinks.forEach(link => link.addEventListener('click', () => {
          menuMobile.classList.remove('show-menu');
          document.querySelector('html').classList.remove('locked');
     }));

     // Modals
     const modalButtons = document.querySelectorAll('.modal-btn');
     const modalWrap = document.querySelector('.modal');
     
     if(modalButtons.length > 0){
          // Open
          document.addEventListener('click', e => {
               if( e.target.closest('.modal-btn') ){

                    const href = e.target.getAttribute('href');
                    const id = href.substring(1);
                    let modal = document.getElementById(id);
                    e.preventDefault();

                    // Masters
                    // content
                    const masters = {
                         master_1: {
                              name: 'Оксана',
                              avatar: 'oksana', // название папки с работами и аватарки oksana.png | images/master-oksana/
                              image_amount: 10, //количество картинок с работами
                              experience: '6,5 лет', //Стаж
                              text: `Более 6 лет я работаю в индустрии красоты и вхожу в топ 100 мастеров России по перманентному макияжу!
                                             Мои главные принципы в работе - это:<br>
                                             -Постоянное развитие<br>
                                             -Качество<br>
                                             -️Подчеркивание уникальности и красоты каждой женщины`
                         },
                         master_2: {
                              name: 'Ольга',
                              avatar: 'olga',
                              image_amount: 9,
                              experience: 'Более 7 лет',
                              text: `Работая с лицами девушек,женщин,я получаю огромное удовольствия от того,что я помогаю им выглядеть красивыми 
                                   и счастливыми,ведь перманентный макияж решает главную проблему женщин-как остаться красивой и ухоженной 24 часа в сутки)`
                         },
                         master_3: {
                              name: 'Ася',
                              avatar: 'asya',
                              image_amount: 12,
                              experience: 'Более 5 лет',
                              text: `Считаю, что всего должно быть в меру, и лицо - не исключение! Поэтому, перманентный макияж предпочитаю естественный и натуральный`
                         },
                         master_4: {
                              name: 'Мария',
                              avatar: 'maria',
                              image_amount: 12,
                              experience: '2 года',
                              text: `Сертифицированный мастер в области перманентного макияжа, за 3 года выполнила свыше 2500 тысяч процедур, 
                              прошла более 20 обучений у ТОПовых мастеров!`
                         },
                         master_5: {
                              name: 'Наталия',
                              avatar: 'natalia',
                              image_amount: 12,
                              experience: 'Более 6 лет',
                              text: `Меня зовут Наталия и я мастер ПМ в студии MakeUpTattoo.Что могу сказать о себе? Так или иначе моя жизнь всегда шла в параллели с искусством, а именно с рисованием. 
                              Акварель, нейл арт, визаж, портреты... постепенно подводили к перманентному макияжу, где наконец все сошлось! И теперь я воплощаю красоту в жизнь!`
                         },
                         master_6: {
                              name: 'Евгения',
                              avatar: 'evgenia',
                              image_amount: 12,
                              experience: '7 лет',
                              text: `Практикующий мастер-бровист и мастер перманентного макияжа. Занимаюсь дизайном бровей с окрашиванием краской и хной. 
                              Владею всеми методами коррекции бровей (пинцет, воск, нить) <br>Имею опыт в преподавательской сфере 2 года, тренер курсов по архитектуре бровей.`
                         },
                         master_7: {
                              name: 'Юлия',
                              avatar: 'julia',
                              image_amount: 12,
                              experience: 'Более 5 лет',
                              text: `Люблю свою работу и отдаюсь ей полностью. В моей профессии не существует мелочей, важно всё! 
                              И отнюдь не на последнем месте чуткое отношение к пожеланиям клиента и искренность в стремлении получить тот результат, на который клиент рассчитывает. 
                              Ну, а взаимный обмен улыбками меняет наш мир к лучшему!
                              Всегда была уверена, что стану психологом (хотя мастер перманентного макияжа – чем не психолог) верю в карму и силу мысли`
                         },
                         master_8: {
                              name: 'Марина',
                              avatar: 'marina',
                              image_amount: 12,
                              experience: 'Более 5 лет',
                              text: `Считаю, что качественный перманентный макияж это в первую очередь естественность и гармоничность вашего образа. 
                              Для меня, как для мастера перманентного макияжа, одной из самых главных задач является профессиональный рост и улучшение своих навыков. 
                              Ведь чем больше ты развиваешься, тем более качественной становится твоя работа!`
                         },
                         master_9: {
                              name: 'Ксения',
                              avatar: 'kseniya',
                              image_amount: 12,
                              experience: 'Более 6 лет',
                              text: `Я получаю огромное удовлетворение, видя счастливые лица своих клиентов. 
                              Пожалуй, как и все мастера своего дела, этим я и живу. Считаю, что перманентный макияж должен выглядеть естественно. 
                              Мои клиенты должны просыпаться красивыми, но не с вечерним макияжем для этого я подчеркиваю их природную красоту. 
                              Гармония должна быть во всем, и моя задача помочь вам в ее достижении внешне. 
                              Я с детства мечтала творить красоту! И я точно знаю, что я на своём месте`
                         },
                         master_10: {
                              name: 'Татьяна',
                              avatar: 'tatyana',
                              image_amount: 12,
                              experience: '4 года',
                              text: ` В моем понимании перманентный макияж - это эстетичный умеренный макияж, подчеркивающий красоту лица.
                              Обожаю свою работу, получаю удовольствие от общения с людьми, эмпат. 
                              Клиенты говорят, что я заряжаю их своим спокойствием.
                              Люблю делать девушек красивее, наблюдать за вашими улыбками от преображения в зеркале! 
                              Не люблю, когда работа выполняется ‘на поток’; я за индивидуальный подход к клиентам.`
                         },
                         master_11: {
                              name: 'Василий',
                              avatar: 'vasiliy',
                              image_amount: 12,
                              experience: '6 лет',
                              text: `«В работе всегда учитываю индивидуальные особенности каждой девушки, предлагая свой мужской взгляд на женскую красоту. 
                              Во время процедуры стараюсь обеспечить максимальный комфорт, 
                              применяю современные нетравматичные техники, благодаря чему восстановление кожи проходит мягко, без корочек, с шелушением. 
                              Я "за" естественность и максимально натуральный вид перманентного макияжа, но обязательно учитываю мнение тех, кому хочется поярче.»`
                         },
                         master_12: {
                              name: 'Алла',
                              avatar: 'alla',
                              image_amount: 11,
                              experience: 'Более 5 лет',
                              text: `Для меня главное в перманентном макияже - умеренность и естественность. 
                              Вот уже более трёх лет я занимаюсь любимым делом, помогая раскрыть и подчеркнуть красоту каждой своей клиентки. 
                              Перманентный макияж это ваша безупречность в любых условиях, это ваше новое восприятие себя. 
                              Жизнь слишком прекрасна, чтобы тратить время на нанесение косметики, хотите попробовать?`
                         },
                         master_13: {
                              name: 'Яна',
                              avatar: 'yana',
                              image_amount: 12,
                              experience: 'Более 6 лет',
                              text: `Предлагаю вам воспользоваться услугой и получить удовольствие, поменяться в свою лучшую сторону и подчеркнуть индивидуальную красоту, 
                              а также с помощью ПМ сэкономить время на повседневный макияж! 
                              В работе я всегда учитываю ваши пожелания и предпочтения в окончательном результате, также помогу подобрать форму и цвет (если сомневаетесь). `
                         },
                         master_14: {
                              name: 'Светлана',
                              avatar: 'svetlana',
                              image_amount: 12,
                              experience: '6 лет',
                              text: `В работе для меня главное не нарисовать новое лицо, а подчеркнуть индивидуальность и скрыть недостатки. Несколько фактов обо мне. 
                              В детстве себе и всем куклам рисовала макияж, используя мамину косметичку (наверно, она была очень рада).`
                         },
                         master_15: {
                              name: 'Ассоль',
                              avatar: 'assol',
                              image_amount: 12,
                              experience: '6 лет',
                              text: `Считаю абсолютно всех женщин красивыми. В каждой своя изюминка, в каждой своя уникальная черта, отличающая нас друг от друга, и выделяющая на фоне всех остальных. 
                              Задача мастера - увидеть эту уникальность, и подчеркнуть её, не нарушив, при этом, естественности и натуральности. 
                              К сожалению, женщина сегодня выполняет сотни функций одновременно, и не всегда имеет возможность ежедневно уделять внимание и время своей внешности.`
                         },
                         master_16: {
                              name: 'Карина',
                              avatar: 'karina',
                              image_amount: 10,
                              experience: '5 лет',
                              text: `«-волосковая техника (аппарат)<br>
                                             -перманентный макияж бровей<br>
                                             -перманентный макияж век<br>
                                             -перманентный макияж губ<br>
                                             -восстановление ареолы груди<br>
                                             -камуфляж темных кругов под глазами<br>
                                             -удаление перманентного макияжа лазером и ремувером»`
                         },
                         master_17: {
                              name: 'Анастасия',
                              avatar: 'anastasia',
                              image_amount: 10,
                              experience: 'Более 10 лет',
                              text: `В моем понимании перманентный макияж - это длительный макияж, созданный с учетом индивидуальных особенностей и подчеркивающий красоту лица. 
                              Для меня приоритет- это аккуратность в работе, ведь важна каждая мелочь в создании полноценного образа. 
                              Я предлагаю вам не просто макияж, а совместную работу над вашим образом. 
                              А залог отличного результата - это безболезненная стирильная процедура, результат которой будет с вами долгое время.`
                         },
                         master_18: {
                              name: 'Алина',
                              avatar: 'alina',
                              image_amount: 5,
                              experience: `«4,5 года<br>
                                            Количество  - более 4000»`,
                              text: `Заняла 2ое место в международном конкурсе World Beauty Voyage PMU, категория Джекпот в 2021г. Также 2-3 раза в год посещаю мастер-классы/форумы по повышению квалификации у лучших мастеров и в самых востребованных академиях России и Мира.`
                         },
                    }

                    // create on click
                    function createMastersContent(element, master) {
                         element.innerHTML = `
                              <span class="close" title="Закрыть">X</span>
                              <div class="row">
                                   <div class="avatar">
                                        <img src="./images/${master.avatar}.png" alt="">
                                   </div>
                                   <div class="text">
                                        <span>${master.name}</span>
                                        <span>${master.experience}</span>
                                        <p>${master.text}</p>
                                   </div>
                              </div> `;

                         // images
                         const imageWrap = document.createElement('div');
                         imageWrap.classList.add('row', 'image-row');
                         element.append(imageWrap);

                         for(let i = 1; i <= master.image_amount; i++){
                              imageWrap.innerHTML +=`<img src="./images/master-${master.avatar}/${i}.png" alt="">`;
                         }
                         element.innerHTML +='<a href="#our-studios" class="anchor btn">Посмотреть цены</a>';
                    }

                    if(!modal){
                         modalWrap.classList.add('show');
                         const modalBody = document.createElement('div');
                         modalBody.classList.add('modal-body', 'modal-masters', 'show');
                         modalBody.setAttribute('id', id);
                         modalWrap.prepend(modalBody);
                         modal = modalBody;

                         for (let elem in masters) {
                              if(id == elem){
                                   createMastersContent(modalBody, masters[elem]);
                              }
                         }
                    }

                    // Technology
                    // content
                    const technology = {
                         technology_1: `<div class="title">Техники, которые используют наши мастера при татуаже бровей</div>
                              <p>Волосковая техника — при этом виде перманентного макияжа на коже прорисовываются отдельные штрихи, имитирующие волоски. Выполняется аппаратом. С этой техникой можно скрыть дефекты, скорректировать густоту бровей, добавить отсутствующие волоски на бровях.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-3-img1.png" alt="">
                                   <img src="./images/technology/technology-3-img2.png" alt="">
                              </div>
                              <p>Теневая техника — выполняется машинкой, имитируя дымку. Представляет собой неплотный прокрас, при виде которого можно назвать его «воздушным». Поверхностное введение обеспечивает возможность получить визуально более густые брови с четким контуром, но без резких линий. Сохраняется в течение 1–3 лет, постепенно бледнеет и сходит на «нет», либо в легкую тень. Теневая растушевка выполняется пигментом, максимально близким к естественному цвету бровей, поэтому этот вид перманентного татуажа выглядит очень естественно.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-3-img3.png" alt="">
                                   <img src="./images/technology/technology-3-img4.png" alt="">
                              </div>
                              <p>Микроблейдинг — выполняется не аппаратом, а специальным инструментом: манипулой. Манипула, представляет собой ручку с тонким рядом иголок, которая как бы процарапывает: делает микроскопические волоски в верхнем слое кожи на бровях. Через эти микро-царапины пигмент проникает в эпидермис.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-3-img5.png" alt="">
                                   <img src="./images/technology/technology-3-img6.png" alt="">
                              </div>
                              <p>Смешанная техника — комбинированная методика перманентного макияжа бровей сочетает в себе теневую и волосковую техники.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-3-img7.png" alt="">
                                   <img src="./images/technology/technology-3-img8.png" alt="">
                              </div>`,
                         technology_2: `<div class="title">Техники, которые используют наши мастера при татуаже губ</div>
                              <p>Акварельная техника — техника с естественным цветом, заполняется внутреннее пространство губ. Пигмент в этой технике укладывается неплотно, тонируя кожу, но при этом заполняя пробелы в естественном цвете и подчеркивая форму, делая границы губ более выразительными.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-2-img1.png" alt="">
                                   <img src="./images/technology/technology-2-img2.png" alt="">
                              </div>
                              <p>Эффект помады — техника с видом накрашенных губ, используется для имитации помады. В этой технике пигмента кладётся больше, чем в акварельной. При проведении процедуры мастер использует пигмент, заполняя всю поверхность губ, в результате создается эффект, что они ярко накрашены.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-2-img3.png" alt="">
                                   <img src="./images/technology/technology-2-img4.png" alt="">
                              </div>
                              <p>3D-техника перманентного макияжа губ — создает объём губ: некоторые части прокрашиваются более плотно, либо цветом темнее, а некоторые части более светлым оттенком, таким образом создаётся эффект пышных губ.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-2-img5.png" alt="">
                                   <img src="./images/technology/technology-2-img6.png" alt="">
                              </div>`,
                         technology_3: `<div class="title">Техники, которые используют наши мастера при татуаже век</div>
                              <p>Межресничный перманентный макияж - нанесение цветового пигмента по линии роста волосков и пространства между ними, эта техника выглядит максимально естественно, придавая яркость и объём ресницам, при этом выглядит естественно. </p>
                              <div class="row">
                                   <img src="./images/technology/technology-1-img1.png" alt="">
                                   <img src="./images/technology/technology-1-img2.png" alt="">
                              </div>
                              <p>Стрелка - закрашивание кожи век над линией роста ресниц, имеет вид четкой линии, как при применении подводки. Хвост стрелки может быть разнообразной формы. Эта техника имеет декоративный характер.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-1-img3.png" alt="">
                                   <img src="./images/technology/technology-1-img4.png" alt="">
                              </div>
                              <p>Стрелка с растушёвкой - техника, при котором размывается внешний край подводки. Эффект, сравнимый с растушёванными тенями или карандашом для глаз. Эта техника считается универсальной.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-1-img5.png" alt="">
                                   <img src="./images/technology/technology-1-img6.png" alt="">
                              </div>`,
                         technology_4: `<div class="title">Техники, которые используют наши мастера при Дермопигментация</div>
                              <p>Камуфляж рубцов, шрамов, царапин, растяжек — это самый простой способ замаскировать повреждения: растяжки, шрамы и рубцы. При этом методика кардинально отличается от нанесения татуировки, которую выбирают, чтобы хоть как-то замаскировать ненавистный рубец.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-4-img1.png" alt="">
                                   <img src="./images/technology/technology-4-img2.png" alt="">
                              </div>
                              <p>Восстановление ареолы груди — перманентный макияж поможет вам подчеркнуть вашу природную красоту груди, сделать ареолу более четкой, скорректировать форму, либо цвет. Эта процедура наиболее актуальна после пластической операции груди. </p>
                              <div class="row">
                                   <img src="./images/technology/technology-4-img3.png" alt="">
                                   <img src="./images/technology/technology-4-img4.png" alt="">
                              </div>
                              <p>Камуфляж темных кругов под глазами — процедура позволяет избавиться от темных следов под глазами и сделать лицо более светлым и отдохнувшим.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-4-img5.png" alt="">
                              </div>
                              <p>Трихопигментация — «эффект бритого волоса». Это процедура по нанесению пигмента в волосистую часть головы с целью маскировки дефектов: шрамов, залысин, редких волос.</p>
                              <div class="row">
                                   <img src="./images/technology/technology-4-img6.png" alt="">
                              </div>`,

                    }
                     
                    // create on click
                    function createTechnologyContent(technologyContent) {
                         modal.innerHTML = `<div class="close" title="Закрыть">X</div>
                                                  ${technologyContent}
                                             <a href="#our-studios" class="anchor btn">Посмотреть стоимость и выбрать мастера</a>`;
                    }
                    for (let key in technology) {
                         if(id == key){
                              createTechnologyContent(technology[key]);
                         }
                    }

                   
                    if(modal){
                         modalWrap.classList.add('show');
                         modal.classList.add('show');
                         document.querySelector('html').classList.add('locked');
                    }

                    // Link in modal
                    // const modalLink = e.target.closest('.btn');
                    // if(modalLink){
                    //      modalLink.addEventListener('click', () => {
                    //           modal.classList.remove('show');
                    //           modalWrap.classList.remove('show');
                    //           document.querySelector('html').classList.remove('locked');
                    //      });
                    // }

                    // Close
                    modalWrap.addEventListener('click', e => {
                         const target = e.target;
                         if( target.closest('.modal-bg') || target.closest('.close') ){
                              modalWrap.classList.remove('show');
                              modal.classList.remove('show');
                              document.querySelector('html').classList.remove('locked');

                         }
                    });
               }
               if(e.target.closest('.anchor') ){
                    modalWrap.classList.remove('show');
                    document.querySelector('html').classList.remove('locked');

                    if(modalWrap.querySelector('.modal-masters.show')){
                         modalWrap.querySelector('.modal-masters.show').classList.remove('show');
                    }
                    if(modalWrap.querySelector('.modal-technology.show')){
                         modalWrap.querySelector('.modal-technology.show').classList.remove('show');
                    }
               }
               
          });

     }


     // Faq
     const faqWrap = document.querySelectorAll('.faq-wrap');
     if(faqWrap.length > 0){
          faqWrap.forEach(item => item.addEventListener('click', () => {
               item.classList.toggle('active');
          }));
     }

     // Sliders
     const mastersSlider = new Swiper('.masters-slider-desktop', {
          direction: 'horizontal',
          grabCursor: true,
          loop: true,
          effect: 'cards',
          // Navigation arrows
          navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
          },
     });
     const mastersSliderMob = new Swiper('.masters-slider-mobile', {
          direction: 'horizontal',
          grabCursor: true,
          centeredSlides: true,
          spaceBetween: 20,
          autoHeight: true,
          // Navigation arrows
          navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
          },
          
     });

     const portfolioSlider = new Swiper('.portfolio-slider', {
          direction: 'horizontal',
          loop: false,
          slidesPerView: 2,
          autoHeight: true,
          spaceBetween: 20,
          grabCursor: true,
          navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
          },
          breakpoints: {
               768: {
                    slidesPerView: 2,
               },
               320: {
                    slidesPerView: 1,
               }
          },
     });
});

// Phone mask
window.addEventListener("DOMContentLoaded", function() {
     [].forEach.call( document.querySelectorAll('.tel'), function(input) {
     var keyCode;
     function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ ____",
             i = 0,
             def = matrix.replace(/\D/g, ""),
             val = this.value.replace(/\D/g, ""),
             new_value = matrix.replace(/[_\d]/g, function(a) {
                 return i < val.length ? val.charAt(i++) || def.charAt(i) : a
             });
         i = new_value.indexOf("_");
         if (i != -1) {
             i < 5 && (i = 3);
             new_value = new_value.slice(0, i)
         }
         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
             function(a) {
                 return "\\d{1," + a.length + "}"
             }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
         if (event.type == "blur" && this.value.length < 5)  this.value = ""
     }
 
     input.addEventListener("input", mask, false);
     input.addEventListener("focus", mask, false);
     input.addEventListener("blur", mask, false);
     input.addEventListener("keydown", mask, false)
 
   });
 
 });