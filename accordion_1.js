window.onload =()=>{
    //panel-faq-container
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
    console.log(panelFaqContainer); //NodeList 객체

    //btn-all-close
    const btnAllClose = document.getElementById('btn-all-close');
    console.log(btnAllClose);

    let panelFaqAnswer= document.querySelectorAll('.panel-faq-answer');

    //반복문 순회하면서 해당 FAQ제목 클릭시 콜백 처리
    for(let i=0;i< panelFaqContainer.length; i++){
        panelFaqContainer[i].addEventListener('click', function(){
            //클릭시 처리 할 일
            console.log('나클릭..');
            //FAQ 제목 클릭시 --> 본문이 보이게끔 --> active 클래스 추가 .
            //본문선택

            // this.classList.add('active'); // 이렇게하면  디스는 panelFaqContainer 를 가르키기 때문에 안됨
            panelFaqAnswer[i].classList.add('active');
        })
    }

    btnAllClose.addEventListener('click',function(){
        for(let i=0;i<panelFaqAnswer.length; i++){
            panelFaqAnswer[i].classList.remove('active');
        }
    })
}