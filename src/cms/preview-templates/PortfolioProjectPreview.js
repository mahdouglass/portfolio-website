import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioProjectTemplate } from '../../templates/portfolio-project'

const PortfolioProjectPreview = ({ entry, widgetFor }) => (
  <PortfolioProjectTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PortfolioProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PortfolioProjectPreview
