const main_div = document.querySelector(".main_div")
var n = 38;
const resize = document.querySelector('#resize');
resize.addEventListener('click' , pablo);

function Render_grid()
{
    
   
    for(let j = 0;j<n;j++)
    {
        const hrz_div = document.createElement('div');
        hrz_div.classList.add("hrz_div");
        for(let i = 0;i<n;i++)
        {
            const cell_div = document.createElement('div');
            cell_div.classList.add("cell_div");
            hrz_div.appendChild(cell_div);
            cell_div.addEventListener('mouseout',()=> {
                cell_div.classList.add('sketched')
            });
        }
        main_div.appendChild(hrz_div);

    }
}
Render_grid();

function pablo()
{
    const size = prompt("GIVE DESIRED SIZE of GRID");
    
    if(size<=64&&size>=1)
    {
        //DELETE ELEMENTS
        main_div.remove(); 
        n = size;
        console.log(n);
    }
    
}
