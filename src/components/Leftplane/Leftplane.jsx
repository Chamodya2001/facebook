import React from 'react'
import "./leftplane.css"
import Form from 'react-bootstrap/Form';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PageviewIcon from '@mui/icons-material/Pageview';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Button from 'react-bootstrap/Button';

function Leftplane() {
  return (
    <div >
    <div className="LeftPlaneBox">
      <div className="leftplaneContainer">
        <div className="leftpaneMenu">
            <li className="leftpaneMenuItem">
               <MarkUnreadChatAltIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Massages</span>
                </li>

                <li className="leftpaneMenuItem">
               <Groups2Icon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Group</span>
                </li>

                <li className="leftpaneMenuItem">
               <PageviewIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Page</span>
                </li>

                <li className="leftpaneMenuItem">
               <ScheduleIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Memories</span>
                </li>
                <li className="leftpaneMenuItem">
               <VideoLibraryIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">video</span>
                </li>

                <li className="leftpaneMenuItem">
               <AddShoppingCartIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Shoping</span>
                </li>

                <li className="leftpaneMenuItem">
               <SaveAltIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Saved</span>
                </li>

                <li className="leftpaneMenuItem">
               <WorkOutlineIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">work</span>
                </li>

                <li className="leftpaneMenuItem">
               <NewspaperIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Newspapper</span>
                </li>

                 <li className="leftpaneMenuItem">
               <SportsEsportsIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Game</span>
                </li>

                <li className="leftpaneMenuItem">
               <RssFeedIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Network</span>
                </li>

                <li className="leftpaneMenuItem">
               <CalendarMonthIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Calender</span>
                </li>

                <li className="leftpaneMenuItem">
               <AssistantPhotoIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Help</span>
                </li>

                <li className="leftpaneMenuItem">
               <BuildIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText">Setting</span>
                </li>
                <hr/>

                <li className="leftpanelMenuItem">
               <HelpOutlineIcon className='leftmenuIcon'/>
               <span className="leftplaneMenuText"></span>
               <Form.Select aria-label="Default select example" className='LeftSelectionMenu'>
                      <option>Help & support</option>
                      <option value="1" className='leftplaneMenuText'>Terms & policies</option>
                      <option value="2" className='leftplaneMenuText'>Suport Inbox</option>
                      <option value="3" className='leftplaneMenuText'>safety</option>
               </Form.Select>        
        
                </li>

                <li className="leftpanelMenuItem">
                <SettingsApplicationsIcon className='leftmenuIcon'/>
                <span className="leftplaneMenuText"></span>
                <Form.Select aria-label="Default select example" className='LeftSelectionMenu'>
                      <option>Setting & Privacy</option>
                      <option value="1" className='leftplaneMenuText'>Device requests</option>
                      <option value="2" className='leftplaneMenuText'>link History</option>
                      <option value="3" className='leftplaneMenuText'>Order And Payment</option>
               </Form.Select>        
        
                </li>
                <hr/>
                <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" className='logout'>
                       Log out
                       </Button>
                           </div>

                </div>
           </div>
    </div>
</div>
  )
}

export default Leftplane
