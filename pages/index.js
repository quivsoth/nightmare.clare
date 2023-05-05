// root folder : /
import Image from 'next/image';

function root() {
    
    return (
        <div>
            <Image
                src="/logo.png"
                width={0}
                height={0}
                sizes="100vw"
                className='logoImg'
            />
            {/* <Image src="/logo.png"  height={100}></Image> */}
            <h1 >Coming soon...</h1> 
        </div>
    )
}


export default root;