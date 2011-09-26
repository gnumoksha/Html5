function applicationCache() {
	this.status = function() {
		var appCache = window.applicationCache;
		switch (appCache.status) {
			case appCache.UNCACHED: // UNCACHED == 0
				return 'uncached';
				break;
			case appCache.IDLE: // IDLE == 1
		    	return 'idle';
				break;
			case appCache.CHECKING: // CHECKING == 2
				return 'checking';
				break;
			case appCache.DOWNLOADING: // DOWNLOADING == 3
				return 'downloading';
				break;
			case appCache.UPDATEREADY:  // UPDATEREADY == 4
				return 'updateready';
				break;
			case appCache.OBSOLETE: // OBSOLETE == 5
				return 'obsolete';
				break;
			default:
				return 'none';
				break;
		};
	}
	
	this.atualiza = function () {
		return window.applicationCache.update();
	};
	
	this.trocaSwap = function () {
		return window.applicationCache.swapCache();
	}
}

