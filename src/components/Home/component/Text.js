import "./Text.scss";
const Text = () => {
    return (
        <>
            <div className="text">
                <div className="me">
                    <div className="info-left">
                        <p className="one">hello, i'm</p>
                        <p className="two">amr abd elhameed</p>
                    </div>
                    <div className="info-right">
                        <span>born in </span>
                        <em>Egypt</em>
                    </div>
                </div>
                <div className="job">
                    <p>frontEnd developer</p>
                    <div className="info-right">
                        <em>1 years </em>
                        <span>experience</span>
                    </div>
                </div>
                <div className="exp">
                    <p>
                        I'm FrontEnd Developer based in Egypt and enjoy
                        developing Responsive WebSites and building high quality
                        WebApps
                    </p>
                    <div className="info-right">
                        <em>15+ </em>
                        <span>projects done</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Text;
