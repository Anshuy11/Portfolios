import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children,sectionRefs , contactRef  }) => {
    return (
    <>
    <Header sectionRefs={sectionRefs} contactRef={contactRef}/>
    <div className="m-3 md:m-6 md:p-6 p-2 min-h-screen ">

    <main>{children}</main>
    </div>

        <Footer contactRef={contactRef} />
    </>
)
  };
  
  export default Layout;
  