import { Paper, Toolbar, Drawer } from "@material-ui/core"
import { styled } from "@material-ui/styles"

export const SidebarAndContentContainerStyled = styled(Paper)(()=> ({
    display:'flex',
    flexDirection:'row', 
    marginTop:50,
}))

export const ContentContainerStyled = styled(Paper)(()=> ({
    width:'100%', 
    padding:10,
}))

export const SidebarToolbarStyled = styled(Toolbar)(()=> ({
    marginTop:50,
}))
export const SidebarDrawerStyled = styled(Drawer)(()=> ({
    zIndex:1,
}))