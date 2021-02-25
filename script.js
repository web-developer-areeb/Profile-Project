document.getElementById('about-me__read-more').addEventListener('click', e=>{
    document.querySelector('#about-me__description-text p').classList.add('space');

    const para = document.createElement('p');
    const node = document.createTextNode('Unfortunately I forced to take admission in B.Tech Mechanical branch. But the good thing is that I have learned web designing on Udemy and now I am capable of building beautiful responsive websites. I was also doing BCA before my admission to B.Tech (Mech.).');
    para.appendChild(node);

    document.getElementById('about-me__description-text').appendChild(para);


});


// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);

// var element = document.getElementById("div1");
// element.appendChild(para);