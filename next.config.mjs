/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source : '/user',
                destination : '/',
                permanent: false
            },
            {
                source : '/user/:userid',
                destination : '/',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
