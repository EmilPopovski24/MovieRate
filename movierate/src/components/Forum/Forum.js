import "./Forum.css";

export const Forum = () => {
    return (
        <>
        <p>Forum page</p>

    <header>
        <div class="mini-navbar-wrap">
            <div class="logo-wrap">
                <p class="logo"><span class="logo">MovieRate Forum</span></p>
            </div>
            <div class="mini-navbar">
                <ul>
                    <li>
                        <a href="#">John's profile</a>
                    </li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Themes</a>
                </li>
                <li>
                    <a href="#">New Theme</a>
                </li>
            </ul>
        </nav>

    </header>


    <div class="container">
        <div class="new-theme-border">
            <div class="header-background">
                <span>New Theme</span>
            </div>
            <form>
                <div class="new-theme-title">
                    <label for="themeName">Title <span class="red">*</span></label>
                    <input type="text" name="themeName" id="themeName" />
                    <p class="error">
                        Theme name is required.
                    </p>
                    <p class="error">
                        Theme name must be at least 5 characters long.
                    </p>
                </div>
                <div class="new-theme-content">
                    <label for="postText">Post <span class="red">*</span></label>
                    <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
                    <p class="error">
                        The field with your post is required.
                    </p>
                    <p class="error">
                        Post must be at least 10 characters long.
                    </p>
                </div>
                <div class="new-theme-buttons">
                    <button class="cancel">Cancel</button>
                    <button class="public">Post</button>
                </div>

            </form>
        </div>
    </div>
    <div class="container">
  
        <div class="theme-content">
       
            <div class="theme-title">
                <div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2>Angular 10</h2>
                        <p>Date: <time>2020-10-10 12:08:28</time></p>
                    </div>
                    <div class="subscribers">
                        <p>Subscribers: <span>456</span></p>
                        <button class="subscribe">Subscribe</button>
                        <button class="unsubscribe">Unsubscribe</button> 
                    </div>
                </div>
            </div>
            
            <div class="comment">
                <header class="header">
                    <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>
                </header>
                <div class="comment-main">
                    <div class="userdetails">
                        <img src="./profile.png" alt="avatar"/>
                    </div>
                    <div class="post-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint dolorem quam,
                            accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
                            nostrum facilis ipsum dolorem deserunt illum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint dolorem quam,
                            accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
                            nostrum facilis ipsum dolorem deserunt illum?</p>
                    </div>
                </div>
                <div class="footer">
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-thumbs-down"></i>
                    <p><span>5</span> likes</p>
                </div>
            </div>
            <div class="comment">
                <header class="header">
                    <p><span>Mark</span> posted on <time>2020-10-10 14:28:11</time></p>
                </header>
                <div class="comment-main">
                    <div class="userdetails">
                        <img src="./profile.png" alt="avatar" />
                    </div>
                    <div class="post-content">
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                </div>
                <div class="footer">
                     <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-thumbs-down"></i>
                    <p><span>3</span> likes</p>
                </div>
            </div>
            <div class="answer-comment">
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <button>Post</button>
                    </form>
                </div>
            </div>

        </div>
    </div>

       </>
    )
}