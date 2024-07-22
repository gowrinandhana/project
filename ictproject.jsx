function NavBar() {
    return (
    <div >  
      <div style={{color:'black',display :'flex',alignItems:'center',justifyContent:'space-between',padding:'10px',boxShadow: '0 0 100px rgba(0, 0, 0, 0.1)',backgroundImage:'url(./fru.jpg)',backgroundSize: 'cover', minHeight: '20vh'}}>
            <div style={{justifyContent:'space-between',alignItems:'center',marginLeft:'100px',fontSize:'30px',fontFamily:'cursive'}}>
            
              <h1>Product Management</h1></div>
             
             
              <button style={{width:'100px',height:'30px'}}  >Dashboard</button>

              
              <button style={{width:'100px',height:'30px',marginRight:'80px'}} >Home</button>
              
            
                  
                  
         </div>   
      
     </div>  
        
      );
          }
    export default NavBar;

