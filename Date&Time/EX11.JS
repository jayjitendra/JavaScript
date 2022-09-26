var BirthdayWishes=[
    {
        title:` Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday! `
    },
    {
        title:`This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people Ive ever known.`
    },
    {
        title:`This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people Ive ever known.`
    },
    {
        title:`This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people Ive ever known.`
    },
    {
        title:`“Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!”`
    },
    {
        title:`“Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!”`
    },
    {
        title:`“Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!”`
    },
    {
        title:`“Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!”`
    },
    {
        title:`“Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!”`
    },
    {
        title:`“Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!”`
    },
    {
        title:`“Happy birthday! Your life is just about to pick up speed and blast off into the stratosphere. Wear a seat belt and be sure to enjoy the journey. Happy birthday!”`
    },
    
]


//sms
function myfun(request)
        {
            //target input_by id reference.....
           var textarea_dom=document.getElementById('source-code')

           textarea_dom.value=request //li_texData assign to textarea

             //target output id reference.....
             var output_dom=document.getElementById('code_result')

             //update text area  input as response to output_tag..
             output_dom.innerHTML=250-textarea_dom.value.length

        
        }