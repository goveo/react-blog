import React, { useMemo } from 'react';
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

  const button = useMemo(() => {
    if (!width) return null;
    if (width > ScreenWidth.S) {
      // on desktop show outline button
      return (
        <AddButton color="primary" variant="outlined" aria-label="add" startIcon={<AddIcon />}>
          {text}
        </AddButton>
      );
    } else {
      // on mobile devices show fab
      return (
        <AddFab color="primary" aria-label="add">
          <AddIcon />
        </AddFab>
      );
    }
  }, [width, text]);

  return width && button ? (
    <Link href="/posts/new" as="/posts/new">
      {button}
    </Link>
  ) : null;
};

const AddButton = styled(Button)`
  margin: 20px 0;
  width: 100%;
`;

const AddFab = styled(Fab)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;

export default AddPostButton;
