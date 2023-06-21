const main_div = document.querySelector(".main_div")
const resize = document.querySelector('#resize');//button resize
let colorpicker = document.querySelector("#colorpicker")
const rainbow = document.querySelector('.rainbow');
const clear_btn = document.querySelector('.clr');
colorpicker.value = "#ff0000";

let n = 38;
let Is_resize = false;
function Render_grid()
{
    
       
            const hrz_div = document.createElement('div');
            hrz_div.classList.add("hrz_div");
            for(let i = 0;i<n;i++)
            {
                const cell_div = document.createElement('div');
                cell_div.style.opacity="1";
                cell_div.classList.add("cell_div");
               
                hrz_div.appendChild(cell_div);
                
                let visited = false;
                cell_div.addEventListener('mouseout',()=> {
                      change_color(cell_div,visited);
                     
                      visited = true;
                });
            }
            main_div.appendChild(hrz_div);

        
   
}
function change_color(cell_div,visited)
{
    if(cell_div.style.backgroundColor==="")
    {
    if(rainbow.classList.contains('YO'))
    {
           cell_div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }else  cell_div.style.backgroundColor = colorpicker.value;
    }else  cell_div.style.opacity = parseFloat(cell_div.style.opacity) -0.05;
} 


function pablo()
{
    const size = prompt("GIVE DESIRED SIZE of GRID");
    
    if(size<=100&&size>=1)
    {
        Is_resize=true;
        n=size;
        //DELETE ELEMENTS
        main_div.innerHTML = ""; 
        let i = 0;
        const renderInterval = setInterval(()=>{
            Render_grid();
            i++;
            if(i==n){
                clearInterval(renderInterval);
            }
        },0.2);
        
        
    }
    
}
if(!Is_resize) 
{
    for(let j =0;j<n;j++)
    {
        Render_grid();
    }
}
clear_btn.addEventListener('click',()=>{
    location.reload();
})
resize.addEventListener('click' , pablo);
rainbow.addEventListener('click',()=>{
    if(rainbow.classList.contains("YO"))
    {
        rainbow.classList.remove('YO');
    }else{
        rainbow.classList.add('YO');
    }
})
