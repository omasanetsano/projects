document.querySelector('#toggleMenu').addEventListener('click', ()=>{
            
    if ( document.querySelector('.navbar-menu').classList.contains('active') )
    {
        document.querySelector('.navbar-menu').classList.remove('active')
        document.querySelector('#toggleMenu').innerHTML = '<i class="fas fa-bars fa-xl " ></i>';
    }
    else
    {
        document.querySelector('.navbar-menu').classList.add('active');
        document.querySelector('#toggleMenu').innerHTML = '<i class="fas fa-times fa-xl " ></i>';


    }


});

function hideMenuOnclick() {
        
    document.querySelectorAll('.navbar-menu .menu-item').forEach( (item)=>{

        item.addEventListener('click', ()=>{

            if ( item.tagName.toLowerCase() === 'a' )
            {

                if ( document.querySelector('.navbar-menu').classList.contains('active') )
                {
                    document.querySelector('.navbar-menu').classList.remove('active')
                    document.querySelector('#toggleMenu').innerHTML = '<i class="fas fa-bars fa-xl " ></i>';
                }
                else
                {
                    document.querySelector('.navbar-menu').classList.add('active');
                    document.querySelector('#toggleMenu').innerHTML = '<i class="fas fa-times fa-xl " ></i>';

                }

            }
            

        });

    } );

}

hideMenuOnclick();