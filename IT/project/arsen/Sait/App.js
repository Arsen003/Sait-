import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>

            <header className='header'>
                <div>
                    <img src='https://www.stickpng.com/assets/images/5842a4f5a6515b1e0ad75af6.png'/>
                </div>
            </header>

            <nav className='nav'>
                <div>
                    <a>
                        Profile
                    </a>
                </div>
                <div>
                    <a>
                        Messages
                    </a>
                </div>
                <div>
                    <a>
                        News
                    </a>
                </div>
                <div>
                    <a>
                        Music
                    </a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content' >
                <img src='https://pbs.twimg.com/media/DeBEZEyUQAAPOOV.jpg'/>
                <div >
                    ava + description
                </div>
                <div>
                    My posts
                </div>
                <div>
                    New posts
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>);
}
export  default App;

