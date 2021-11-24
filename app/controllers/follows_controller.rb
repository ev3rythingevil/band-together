class FollowsController < ApplicationController

    # for adding followers, we will send up a user_id from the card of the user that the session user wishes to follow,
    # and then shovel it in like so: user_id.followers << session_user
end
