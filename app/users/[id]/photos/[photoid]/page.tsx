interface Props {
  params: {
    id: number
    photoid: number
  }
}

function PhotoPage({ params: { id, photoid } }: Props) {
  return (
    <div>
      PhotoPage {id} {photoid}
    </div>
  )
}
export default PhotoPage
