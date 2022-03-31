import { useEffect, useState } from 'react'
import { Button } from './Button'
import { api } from '../services/api'
import { GenreResponseProps } from '../App'

interface SideBarProps {
  genres: GenreResponseProps[]
  selectedGenreId: number
  handleClickButton: Function
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
