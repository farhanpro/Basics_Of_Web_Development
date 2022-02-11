import './style.css'

const Tabs = props =>
{
     return(
        <div className='tabs-container'>
        <div className = 'tabs-header flex'>
            <a className = "active" href="#commercial">
                Commercial
            </a>
            <a href="#freelicense">
                Free License
            </a>
        </div>
            {/* Tab  Content */}
            <div className="tab-contents">
                
                <div className = "tab-content" id="commercial">
                    <div className="content-wrapper flex justify-sb m-20">
                        <div className="content-item">
                            <img/>
                        </div>

                        <div className="content-item">
                            <img/>
                        </div>

                    </div>
                </div>

                <div className = "tab-content" id="freelicense">
                    Free License
                </div>

            </div>
        </div>
        );
}
export default Tabs;