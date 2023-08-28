document.querySelector('.responsive-menu-icon').addEventListener('click', ()=>{
            
    if ( document.querySelector('.navbar-menu').classList.contains('active') )
    {
        document.querySelector('.navbar-menu').classList.remove('active')
        document.querySelector('.responsive-menu-icon').innerHTML = '<i class="fas fa-bars " ></i>';
    }
    else
    {
        document.querySelector('.navbar-menu').classList.add('active');
        document.querySelector('.responsive-menu-icon').innerHTML = '<i class="fas fa-times " ></i>';


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
                    document.querySelector('.responsive-menu-icon').innerHTML = '<i class="fas fa-bars " ></i>';
                }
                else
                {
                    document.querySelector('.navbar-menu').classList.add('active');
                    document.querySelector('.responsive-menu-icon').innerHTML = '<i class="fas fa-times " ></i>';

                }

            }
            

        });

    } );

}

hideMenuOnclick();