docker run \
	--mount type=bind,source="$(pwd)"/output/cucumber,target=/probr/cucumber \
	probr-view
