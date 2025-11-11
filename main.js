function getMainElement(){
    return document.getElementById('cards');
}

// دالة بتجهّز عناصر الكارت (من غير ما تجمعهم)
function buildCardElements(name, image) {
    // بنعمل العناصر الأساسية
    let title = document.createElement('h2');
    title.className = 'name';
    title.textContent = name; // الاسم

    let img = document.createElement('img');
    img.className = 'img';
    img.src = image; // الصورة

    // ال paragraph
    let paragraph = document.createElement('p');
    paragraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vero est ducimus numquam? Magnam sunt possimus nam nobis consequatur modi, blanditiis reiciendis? 
        Qui laudantium autem voluptatibus accusamus sunt! Nisi, perspiciatis id.`; // النص التجريبي

    // بنرجّع العناصر عشان نستخدمهم بعدين
    return {
        'title': title ,
        'image' : img ,
        'paragraph': paragraph,
    };
}

//  دالة بتعمل الكارت النهائي
function makeCard(name, image, index) {
    let card = document.createElement('div');
    card.setAttribute(`id`,`card${index + 1}`)
    card.setAttribute(`class`,'card')

    // هنا بنستدعي الدالة اللي فوق عشان نجيب العناصر الجاهزة
    let elements = buildCardElements(name, image);
    let title = elements.title ;
    let img = elements.image;
    let paragraph = elements.paragraph;

    // بنجمع العناصر جوه الكارت
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(paragraph);

    return card;
}

//  دالة بتعمل كل الكروت وتضيفهم في الصفحة
function createCards(names, images) {
    let container = getMainElement(); 
    for (let i = 0; i < names.length; i++) {
        let card = makeCard(names[i], images[i], i);
        container.appendChild(card);
    }
}
// داله بتنادي 
function call(){
    let names = ['Mohamed', 'Asil', 'Ahmed'];
    let images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
    createCards(names, images);
    useQuerySelector(names)
}
// بتطبع الكاردس
function useQuerySelector(names){
    let all =  document.querySelectorAll('.card')
    for (let i = 0 ; i<names.length ; i++){
        console.log(all[i])
    }
}



call()
