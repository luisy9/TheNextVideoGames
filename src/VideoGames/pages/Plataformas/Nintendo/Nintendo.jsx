import ps from '../../../../assets/banner-ps.jpg';

export const Nintendo = () => {
  return (
    <div className='container-fluid'>
      <img src={ps} alt="nintendo-banner" style={{ width: '100%', borderRadius: '10px' }} />
    </div>
  )
}

export default Nintendo;