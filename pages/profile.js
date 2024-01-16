import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <div>[{ user }]</div>
      <button type="button">Sign Out</button>
    </>
  );
}
