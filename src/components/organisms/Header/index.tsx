import GroupButtonsMolecule from '@/components/molecules/GroupButtons';
import TitleMolecule from '@/components/molecules/Title';
import React from 'react';
import './header.sass';

type HeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export default function HeaderOrganism({ title, children }: HeaderProps) {
  return (
    <header className="header">
      <TitleMolecule title={title} />
      <GroupButtonsMolecule>{children}</GroupButtonsMolecule>
    </header>
  );
}
