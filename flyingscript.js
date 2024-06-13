window.onload = function(argument){
    var lyrics = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt asperiores odit, accusantium similique assumenda harum ipsa id. Libero quam id optio tempore aspernatur similique. Necessitatibus porro fugiat quibusdam beatae maxime quidem voluptate, nemo accusamus perspiciatis excepturi minus quo, pariatur, inventore cumque quasi alias dignissimos a iusto! Consequuntur explicabo deleniti ratione eius esse commodi odit, perferendis maxime fuga necessitatibus. Itaque, suscipit nihil, earum adipisci autem exercitationem reiciendis atque esse inventore "
    var words = {};
    var words_attr = [];
    string_handle(lyric);
    


    var canvas = document.getElementById('c');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if(canvas.getContext){
        var c = canvas.getContext('2d'),
            w = canvas.width,
            h = canvas.height;

        
        c.strokeStyle = 'red';
        c.fillStyle = 'white';
        c.lineWidth  = 5;
        
        //constructor

        word = function(key){
            this.text = key;
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.font= words[key] * 10 + 'px arial';
            this.speed = (words[key]);
        }

        for(key in words){
            words_attr.push(new word(key));
        }

        console.log(words_attr.length);

        function animation(){
            for(var i=0;i<words_attr.length; i++){
                c.font = words_attr[i].font;
                c.fillText(words_attr[i].text,words_attr[i].x,words_attr[i].y);
                words_attr[i].width = c.measureText(words_attr[i].text).width;
                c.stroke();
            }
            moveBy();
        }

        function move(){
            for(var i=0;i<words_attr.length; i++){
                if(words_attr[i].x > w){
                    words_attr[i].x = -words_attr.width;
                    words_attr[i].y =  Math.random() * h ;

                }
                else {
                    words_attr[i].x += words_attr[i].speed;
                }
            }
        }
        setInterval(function(){
            c.clearRect(0,0,w,h);
            animation();

        },24)


    }

    function string_handle(str){
        var split_str = str.split("  ");
        var words_array = [];
        var word_count = [];
        for(var i=0; i<split_str.length;i++){
            check = true;
            for(var j=0; j<=words_array.length;j++){
                check = false;
                break;

            }
            if(check){
                word_
            }
        }
    }

}
