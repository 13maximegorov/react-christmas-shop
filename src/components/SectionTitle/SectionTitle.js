import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import PropTypes from 'prop-types'
import './SectionTitle.css'

const sectionTitle = cn('section-title')

const SectionTitle = ({className, children}) => {
  return (
    <h2 className={classnames(className, sectionTitle())}>
      {children}
    </h2>
  )
}

SectionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default SectionTitle
