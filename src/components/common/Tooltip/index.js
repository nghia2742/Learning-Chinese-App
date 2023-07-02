import React from 'react';
import TooltipMui from '@mui/material/Tooltip';
import {TfiHelpAlt} from 'react-icons/tfi';

function Tooltip({title}) {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <div style={{cursor:'pointer'}}>
            <TooltipMui PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableTouchListener
                title={title?title:"Upcoming!"} 
                arrow>
                <div onClick={handleTooltipOpen}><TfiHelpAlt/></div>
            </TooltipMui>
        </div>
    );
}

export default Tooltip;
