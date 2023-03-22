import styled from "styled-components";

export default function Gallery(props) {
  return <GalleryBox img={props.img}>{props.name}</GalleryBox>;
}
const GalleryBox = styled.div`
  width: 310px;
  background-image: url("${(props) => props.img}");
  background-size: cover;
  background-position: center;
`;
