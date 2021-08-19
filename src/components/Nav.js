import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
    return (
              <div id = "site_menu">
                <Link to="/location">
                   <button class='button6'
                     onClick={function(){
                        var list = document.getElementsByClassName("container")[0];
                        list.getElementsByClassName("content_boxes")[0].scrollIntoView({behavior:"smooth"});
                      }}>
                      Location
                   </button>
                </Link>
                <Link to="/menu">
                   <button class='button5'
                     onClick={function(){
                        var list = document.getElementsByClassName("container")[0];
                        list.getElementsByClassName("content_boxes")[1].scrollIntoView({behavior:"smooth"});
                      }}>
                      Menu
                   </button>
                </Link>
                <Link to="/about">
                  <button class='button4'
                     onClick={function(){
                        var list = document.getElementsByClassName("container")[0];
                        list.getElementsByClassName("content_boxes")[2].scrollIntoView({behavior:"smooth"});
                      }}>
                     About
                  </button>
                </Link>
                <Link to="/contact">
                  <button class='button3'
                     onClick={function(){
                        var list = document.getElementsByClassName("container")[0];
                        list.getElementsByClassName("content_boxes")[3].scrollIntoView({behavior:"smooth"});
                      }}>
                     Contact
                  </button>
                </Link>
               </div>
    )
}

export default Nav;