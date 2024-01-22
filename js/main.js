let dataItemBlog = [
    {
        img: './images/top/Mask_Group_13.png',
        imgOverlay: './images/top/Mask_Group_131.png',
        date: '2022.00.00 - News',
        title: 'テキストテキストテスキスト',
        content: 'テキストテキストテスキストテキストテキストテキトテ…'
    },
    {
        img: './images/top/Mask_Group_131.png',
        imgOverlay: './images/top/Mask_Group_132.png',
        date: '2022.00.00 - News',
        title: 'テキストテキストテスキスト',
        content: 'テキストテキストテスキストテキストテキストテキトテ…'
    },
    {
        img: './images/top/Mask_Group_132.png',
        imgOverlay: './images/top/Mask_Group_13.png',
        date: '2022.00.00 - News',
        title: 'テキストテキストテスキスト',
        content: 'テキストテキストテスキストテキストテキストテキトテ…'
    },
]

let renderItem = (arr) => {
    var contentHTML = "";
    for (let item of arr) {
        var contentItem = `<div class="content__item">
                            <div class="item__img">
                                <img src="${item.img}" alt="" class="img"/>
                                <img src="${item.imgOverlay}" alt="" class="img-overlay"/>
                            </div>
                            <div class="item__text">
                                <div class="text__container">
                                    <p class="text-date">${item.date}</p>
                                    <h4 class="text-title">${item.title}</h4>
                                    <p class="text-content">${item.content}</p>
                                </div>
                            </div>
                         </div>
                        `;
        contentHTML += contentItem;
    }
    document.getElementById("item-list-left").innerHTML = contentHTML;
    document.getElementById("item-list-right").innerHTML = contentHTML;
}

renderItem(dataItemBlog);

let onBackToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function onToggleNavbar() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('isShowed')
}