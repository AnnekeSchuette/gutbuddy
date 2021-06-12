import styled from 'styled-components/macro'
import { BadgeListProps } from '../../interfaces'

export default function BadgeList({ items, color }: BadgeListProps) {
  return (
    <BadgeListing color={color}>
      {items.map((item: string) => (
        <li>{item}</li>
      ))}
    </BadgeListing>
  )
}

const BadgeListing = styled.ul`
  list-style: none;

  li {
    background-color: ${(props) => props.color};
    border-radius: 5px;
  }
`
