import React from 'react'
import {getProviders, singIn} from "next-auth/react";


function Login() {
  return (
    <div>
        <img className='w-52 mb-5' alt='spotify logo'src='https://3.bp.blogspot.com/-Q7JrPSPptg8/XHkmi7WYygI/AAAAAAAAIOc/YFPV0Lu-jGYQbJmCG_cRwnGUsTirx-ISACK4BGAYYCw/s1600/spotify%2Blogo.png'/>
    
        {Object.values(providers).map((provider) => (
            <div>
                <button>Login with {provider.name}</button>
            </div>
        ))}
    </div>
  )
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        },
    };
}