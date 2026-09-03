//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/', function(request, response) {
	response.redirect("/record-source")
})


router.post('/meeting-type', function(request, response) {

	var meetingType = request.session.data['meetingType']
	if (meetingType == "remote"){
		response.redirect("/remote")
	}
	else if (meetingType == "in-person"){
		response.redirect("/in-person")
	} else {
		response.redirect("/file")
	}
})