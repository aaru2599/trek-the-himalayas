import { Box, Modal,  } from "@mui/material";

const VideoModal = ({ isOpen, onClose,iframeLink }) => {
  if (!isOpen) return null;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 600,
    // height:400,
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    
  };
  return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
     <iframe src={iframeLink} className="w-[798px] h-[446px] "></iframe>
    </Box>
  </Modal>
  );
};

export default VideoModal;
