const Footer =()=>{

    const handleBackToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return(
        <div>

            <div className="flex backtotopbar bg-amazonclone-light_blue text-white items-center justify-center space-x-3 text-xs xl:text-sm p-2 pl-6">
                <button onClick={handleBackToTop} className="back-to-top-btn">Back To Top</button>
            </div>
            <div className="bg-amazonclone-light_blue text-white text-xs xl:text-sm p-2 pl-6">
                <table className="w-full">
                    <thead className="font-bold">
                    <tr>
                        <td className="flex-grow">Get to Know Us</td>
                        <td className="flex-grow">Connect to us</td>
                        <td className="flex-grow">Make money with us</td>
                        <td className="flex-grow">Let us help you</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>About Us</td>
                        <td>Facebook</td>
                        <td>Sell on Amazon</td>
                        <td>COVID-19 and Amazon</td>
                    </tr>
                    <tr>
                        <td>Careers</td>
                        <td>Twitter</td>
                        <td>Sell under Amazon Accelerator</td>
                        <td>Your Account</td>
                    </tr>
                    <tr>
                        <td>Press Releases</td>
                        <td>Instagram</td>
                        <td>Protect and build Your Brand</td>
                        <td>Returns Center</td>
                    </tr>
                    <tr>
                        <td>Amazon Science</td>
                        <td></td>
                        <td>Amazon Global Selling</td>
                        <td>100% Purchase Protection</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Become an affiliate</td>
                        <td>Amazon app download</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Fulfilment by Amazon</td>
                        <td>Help</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Advertise your products</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Amazon pay on merchants</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Footer;
