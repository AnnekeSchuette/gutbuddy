import styled from 'styled-components/macro'
import { BadgeListProps } from '../../interfaces'
import { v4 as uuidv4 } from 'uuid'

export default function BadgeList({ items, color }: BadgeListProps) {
  return (
    <BadgeListing color={color}>
      {items.map((item: string) => (
        <li key={uuidv4()}>{item}</li>
      ))}
    </BadgeListing>
  )
}

const BadgeListing = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 0;
  font-size: 1rem;

  li {
    background-color: ${(props) => props.color};
    border-radius: 5px;
    flex: 1 1;
    text-align: center;
    white-space: nowrap;
    padding: 0 var(--space-xxsmall);
  }
`
