const router = require('express').Router()
const { GET, POST, PUT, DELETE } = require('./controller.js')

router.route('/site/student')
      .get( GET )
      .post( POST )
      .put( PUT )
      .delete( DELETE )


module.exports = router