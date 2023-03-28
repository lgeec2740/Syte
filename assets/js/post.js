Vue.component('post', {
    template:"<div><h1>post</h1></div>",
    data(){
        return{
            articles:[ {
                id: 1,
                name: 'Задачи организации',
                description: 'Не следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-10 16:00:00'
              },
              {
                id: 2,
                name: 'Формирование позиции',
                description: 'С другой стороны начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке форм развития. Таким образом консультация с широким активом требуют от нас анализа новых предложений.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-09 16:00:00'
              }]
        }
    }

})