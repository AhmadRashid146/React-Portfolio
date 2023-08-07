import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'

const Services = () => {
  return (
    <div>
      <h3 className="text-2xl py-2">Services I offer</h3>
      <p className="text-md py-5 leading-8 text-gray-800">
        I build efficient software solutions, write clean code, and collaborate
        with teams to bring innovative ideas to life.Scince the begining of of
        my journey as freelancer i worked for <span className="text-teal-500">agencies</span>  and  <span className="text-teal-500">startups</span>. Skilled in
        Java, Python, or C++, I ensure reliability and scalability in web,
        mobile, or desktop applications
      </p>
      <p className="text-md py-5 leading-8 text-gray-800">
        I build efficient software solutions, write clean code, and collaborate
        with teams to bring innovative ideas to life.
      </p>
      <div className='lg:flex gap-10'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src={design} alt="design" width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
                Creating elegant designs suited fro your design theory
            </p>
            <h4 className='py-4 text-teal-600'>Design tools i use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src={code} alt="design" width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
                Creating elegant designs suited fro your design theory
            </p>
            <h4 className='py-4 text-teal-600'>Design tools i use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src={consulting} alt="design" width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
                Creating elegant designs suited fro your design theory
            </p>
            <h4 className='py-4 text-teal-600'>Design tools i use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
