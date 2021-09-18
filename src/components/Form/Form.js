import React,{useEffect, useState} from 'react';

const Form = () => {
    const [user, setUser] = useState({
        name: ' ',
        email: ' ',
        gender: ' ',
        phone: ' ',
    });
    const [data, setData] = useState([]);

    const userId = new Date().getTime();

    const found = data.some(el => el.email === user.email);
    
    useEffect(()=> {
        async function fetchMyAPI() {
            let result = await fetch("http://localhost:8000/users");
            result = await result.json();
            setData(result);
          }
      
          fetchMyAPI();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({...user, id: userId});

        if (!found) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };
            fetch('http://localhost:8000/users', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('Data: ', data);
                    setUser({
                        name: ' ',
                        email: ' ',
                        gender: ' ',
                        phone: ' ',
                    });
                })
                .catch(err => console.log('Error:', err))
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <form onSubmit={(e)=> handleSubmit(e)} className="row g-3">
                        <div className="col-md-12">
                            <label for="name" className="form-label">Name</label>
                            <input 
                            type="text" 
                            name="name"
                            value={user.name}
                            onChange={(e)=> setUser({...user, name: e.target.value})} 
                            className="form-control" 
                            id="name" required />
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmail" className="form-label">Email</label>
                            <input 
                            type="email" 
                            name="email"
                            value={user.email}
                            onChange={(e)=> setUser({...user, email: e.target.value})}  
                            className="form-control" 
                            id="inputEmail" required />
                            { found ? 
                            <>
                                <div className="alert alert-danger mt-3" role="alert">
                                Please enter an unique email
                                </div>
                            </> 
                            :
                            null
                            }
                        </div>
                        <div className="col-md-6">
                            <label for="gender" className="form-label">Gender</label>
                            <select 
                            className="form-select" 
                            name="gender"
                            value={user.gender}
                            onChange={(e)=> setUser({...user, gender:  e.target.value})}  
                            id="gender" 
                            aria-label="Default select example" required>
                                <option selected>Open this select menu</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="phone" className="form-label">Phone</label>
                            <input 
                            type="tel" 
                            name="phone"
                            value={user.phone}
                            onChange={(e)=> setUser({...user, phone: e.target.value})}  
                            className="form-control" 
                            id="phone" required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;