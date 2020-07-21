import React from 'react';
import styled from 'styled-components';
import { Button, Fab } from '@material-ui/core';
import Link from 'next/link';
import AddIcon from '@material-ui/icons/Add';
import useWindowDimensions from '../../lib/hooks/useWindowDimensions';
import { ScreenWidth } from '../../lib/media/mediaWidth';

export interface AddPostButtonProps {
  text?: string;
  color?: string;
}

const AddPostButton: React.FC<AddPostButtonProps> = ({ text = 'Add post' }) => {
  const { width } = useWindowDimensions();
  return (
    <Link href="/posts/new" as="/posts/new">
      {width > ScreenWidth.S ? (
        <AddButton color="primary" variant="outlined" aria-label="add" startIcon={<AddIcon />}>
          {text}
        </AddButton>
      ) : (
        <AddFab color="primary" aria-label="add">
          <AddIcon />
        </AddFab>
      )}
    </Link>
  );
};

const AddButton = styled(Button)`
  margin: 20px 0;
  width: 100%;
`;

const AddFab = styled(Fab)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export default AddPostButton;
